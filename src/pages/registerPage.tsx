import Layout from "../components/Layout";
import styled from "styled-components";
import useInput from "../hooks/useInput";
import { useEffect, useState } from "react";
import Router from "next/router";

const CenterS = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  margin: 8% 15% 0;
`;
const TitleStyle = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  justify-content: center;
`;
const TitleFontStyle = styled.div`
  font-size: 1.5em;
  font-weight: bold;
`;
const SubTitleFontStyle = styled(TitleStyle)`
  font-size: 1em;
  font-weight: bold;
`;

const InputBaseStyle = styled.div`
  width: 33%;
  margin: 55px 34% 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const InputSpanStyle = styled.span`
  display: inline-block;
  width: 90%;
  position: relative;
  vertical-align: middle;
`;
const InputDetailStyle = styled.input`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 14px;
  color: #000;
  width: 99%;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #999;
  /* padding:14px 0; */
  /* transition:border-bottom .3s; */
`;
const InputWithButton = styled.input`
  margin-top: 5px;
  margin-bottom: 10px;
  font-size: 14px;
  color: #000;
  width: 74%;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #999;
  /* padding:14px 0; */
  /* transition:border-bottom .3s; */
`;
const InputLabelStyle = styled.label`
  font-size: 1em;
  font-weight: bold;
`;
const ButtonWithInput = styled.button`
  width: 23%;
  margin-left: 10px;
`;
const InputButton = styled.button`
  width: 100%;
  margin-top: 30px;
`;
const EzRegisterLabel = styled.span`
  font-size: 1.1em;
  font-weight: bold;
  margin-top: 15px;
  margin-bottom: 10px;
  color: #000;
  height: 30px;
`;
const ImageBase = styled.div`
  display: inline-flex;
  width: 165px;
  height: 70px;
  position: relative;
  vertical-align: middle;
`;
const SampleImage = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-left: 10px;
  margin-right: 10px;
  background: #5f5f5f;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const RegisterPage = () => {

  const userId = useInput('')
  const userPw = useInput('')
  const userPhone = useInput('')
  const userEmail = useInput('')
  const authNum = useInput('')

  const [isIdCheck, setIdCheck] = useState(false) // id 중복확인이 됐는지 체크
  const [pwCheck, setPwCheck] = useState()        // 비밀번호 확인 input
  const [isPwError,setPwError] = useState(false)  // 비밀번호 / 비밀번호 확인이 같은지 체크
  
  const [isExist, setIsExist] = useState(false)   // 입력한 아이디가 중복인지 체크

  const checkDuplicateId = async () => {
    const checkId:string = userId.value
    console.log(checkId.length);
    if(checkId.length < 5) {
      alert('아이디는 6자 이상이어야 합니다.')
    } else {
      const {results}  =  await (await fetch(`/user/${checkId}`)).json();
      console.log(results)
      // TODO : API 나온 후 수정 필요
      if(results === '' || results === undefined) {
        setIsExist(true);
      } else {
        setIsExist(false)
      }
      if(isExist){
        alert('중복된 아이디입니다.')
      } else {
        alert('사용 가능한 아이디 입니다.')
        setIdCheck(true);
      }
    }
  }

  const handlePw =(e) => {
    const {value}:any={...e.target}
    setPwError(userPw.value !== value) //같으면 false 다르면 true
    setPwCheck(value)
  }

  const validateUser = () => {
    // TODO : API 나온 후 수정 필요
    if(!isIdCheck) {
      alert('아이디 중복체크를 해주세요.')
    } else if (userPw.value === '' || pwCheck === undefined || isPwError){
      alert('비밀번호를 확인해주세요.')
    } else if (userPhone.value === '') {
      alert('전화번호를 확인해주세요.')
    } else if (userEmail.value === '') {
      alert('이메일을 확인해주세요.')
    } else if (authNum.value === '') {
      alert('인증번호를 확인해주세요.')
    } else {
      console.log(
        'userId : ', userId.value ,
        'userPw : ', userPw.value ,
        'userPhone : ', userPhone.value ,
        'userEmail : ', userEmail.value ,
        'pwCheck  : ', pwCheck
      )
      alert('회원가입이 완료되었습니다.')
      Router.push('/'); 
      // window.open('/', '_self') 뭐가 나을지 나중에 확인
    }
  }

  return (
    <Layout title="회원가입">
      <div>
        <CenterS>
          <div>
            <TitleStyle>
              <TitleFontStyle>회원가입</TitleFontStyle>
              <SubTitleFontStyle>proUp에 오신걸 환영합니다.</SubTitleFontStyle>
            </TitleStyle>
          </div>
        </CenterS>
        <InputBaseStyle>
          <InputSpanStyle>
            <InputLabelStyle>아이디</InputLabelStyle>
            <br/>
            <InputWithButton type="text" readOnly={isIdCheck} {...userId} />
            <ButtonWithInput onClick={checkDuplicateId} disabled={isIdCheck}>중복 확인</ButtonWithInput>
          </InputSpanStyle>
          <InputSpanStyle>
            <InputLabelStyle>비밀번호</InputLabelStyle>
            <InputDetailStyle type="password" {...userPw} />
          </InputSpanStyle>
          <InputSpanStyle>
            <InputLabelStyle>비밀번호확인</InputLabelStyle>
            <InputDetailStyle type="password" value={pwCheck||''} onChange={handlePw} onFocus={handlePw} onBlur={handlePw}/>
            {isPwError && <div style={{color:'red'}}>비밀번호가 일치하지 않습니다.</div>}
            <br/>
          </InputSpanStyle>
          <InputSpanStyle>
            <InputLabelStyle>전화번호</InputLabelStyle>
            <InputDetailStyle type="tel" {...userPhone}/>
          </InputSpanStyle>
          <InputSpanStyle>
            <InputLabelStyle>이메일</InputLabelStyle>
            <br></br>
            <InputWithButton type="text" {...userEmail}/>
            <ButtonWithInput>인증번호 발송</ButtonWithInput>
          </InputSpanStyle>
          <InputSpanStyle>
            <InputLabelStyle>인증번호</InputLabelStyle>
            <InputDetailStyle type="text" {...authNum}/>
          </InputSpanStyle>
          <EzRegisterLabel>
            <span>간편 회원가입</span>
          </EzRegisterLabel>
          <ImageBase>
            <SampleImage />
            <SampleImage />
            <SampleImage />
          </ImageBase>

          <InputButton onClick={validateUser}>회원가입</InputButton>
        </InputBaseStyle>
      </div>
    </Layout>
  );
};

export default RegisterPage;
