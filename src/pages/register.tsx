import Layout from "../components/Layout";
import styled from "styled-components";
import Image from "next/image";

const CenterS = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  margin: 8% 15% 0;
`
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
`
const InputSpanStyle = styled.span`
  display:inline-block;
  width:90%;
  position:relative;
  vertical-align:middle;
`;
const InputDetailStyle = styled.input`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size:14px;
  color:#000;
  width:99%;
  height: 30px;
  border-radius: 5px;
  border:1px solid #999;
  /* padding:14px 0; */
  /* transition:border-bottom .3s; */
`
const InputEmailStyle = styled.input`
  margin-top: 5px;
  margin-bottom: 10px;
  font-size:14px;
  color:#000;
  width:74%;
  height: 30px;
  border-radius: 5px;
  border:1px solid #999;
  /* padding:14px 0; */
  /* transition:border-bottom .3s; */
`
const InputLabelStyle = styled.label`
  font-size: 1em;
  font-weight: bold;
`
const InputEmailButton = styled.button`
  width: 23%;
  margin-left: 10px;
`
const InputButton = styled.button`
  width: 100%;
  margin-top: 30px;
`
const EzRegisterLabel = styled.span`
  font-size: 1.1em;
  font-weight: bold;
  margin-top: 15px;
  margin-bottom: 10px;
  color:#000;
  height: 30px;
`
const ImageBase = styled.div`
  display:inline-flex;
  width:165px;
  height: 70px;
  position:relative;
  vertical-align:middle;
`
const SampleImage = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-left: 10px;
  margin-right: 10px;
  background: #5F5F5F;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const RegisterPage = () => {
  return(
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
            <InputDetailStyle type="text"/>
          </InputSpanStyle>
          <InputSpanStyle>
            <InputLabelStyle>비밀번호</InputLabelStyle>
            <InputDetailStyle type="password"/>
          </InputSpanStyle>
          <InputSpanStyle>
            <InputLabelStyle>비밀번호확인</InputLabelStyle>
            <InputDetailStyle type="password"/>
          </InputSpanStyle>
          <InputSpanStyle>
            <InputLabelStyle>전화번호</InputLabelStyle>
            <InputDetailStyle type="text"/>
          </InputSpanStyle>
          <InputSpanStyle>
            <InputLabelStyle>이메일</InputLabelStyle><br></br>
            <InputEmailStyle type="text"/>
            <InputEmailButton>인증번호 발송</InputEmailButton>
          </InputSpanStyle>
          <InputSpanStyle>
            <InputLabelStyle>인증번호</InputLabelStyle>
            <InputDetailStyle type="text"/>
          </InputSpanStyle>
          <EzRegisterLabel>
            <span>간편 회원가입</span>
          </EzRegisterLabel>
          <ImageBase>
            <SampleImage/><SampleImage/><SampleImage/>
          </ImageBase>

          <InputButton>회원가입</InputButton>
        </InputBaseStyle>
      </div>
    </Layout>
  )
}

export default RegisterPage;