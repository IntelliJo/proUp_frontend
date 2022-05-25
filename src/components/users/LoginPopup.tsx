import styled from "styled-components";
import Link from 'next/link';
import useInput from "../../hooks/useInput";
import Router from "next/router";
import { postLoginUser } from "../../api/userApi";

export type LoginModalProps = {
  visible?: boolean;
  closeEvent: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  actionEvent?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
};

// const LoginPopup = ({ closeEvent, children, actionEvent }: LoginModalProps) => {
const LoginPopup = () => {

  const userId = useInput('')
  const userPw = useInput('')

  const loginUser = async () => {
    //TODO : 로그인 API문서 나오면 이후 변경 필요 > 토큰 쿠키에 집어넣는 작업 진행
    //TODO : 로그아웃도 문서 나오면 같이 진행
    try {
      const resp = await postLoginUser({
        id : userId.value,
        pw : userPw.value
      })
      console.log(resp)
      alert('환영합니다.')
      Router.push('/'); 

    } catch (e) {
      alert('아이디 혹은 비밀번호가 잘못되었습니다.')
      console.log(e)
    }
  }

  return (
    <>
      <LoginPopupContainer>
        <LoginPopupTitle>proUp</LoginPopupTitle>

        <InputDetailStyle type="text" {...userId} placeholder="아이디를 입력해주세요" />
        <InputDetailStyle type="password" {...userPw} placeholder="비밀번호를 입력해주세요" />

        <LoginButton onClick={loginUser}>로그인</LoginButton>

        <Link href="/registerPage">
          <GoRegister>아직 proUp 회원이 아니신가요?</GoRegister>
        </Link>
        <GoFindPw>비밀번호 찾기</GoFindPw>

        <EzRegisterLabel>간편로그인</EzRegisterLabel>
        <ImageBase>
          <SampleImage />
          <SampleImage />
          <SampleImage />
        </ImageBase>
      </LoginPopupContainer>
    </>
  );
};

LoginPopup.defaultProps = {
  active: false,
};

const LoginPopupContainer = styled.div`
  display: flex;
  justify-items: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const LoginPopupTitle = styled(LoginPopupContainer)`
  font-size: 2.3em;
  font-weight: bold;
  color: yellow;
  /* text-shadow: 1px 1px 1px #000; */
  -webkit-text-stroke: 0.5px black;
  margin-bottom: 50px;
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
`;
const LoginButton = styled.button`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 14px;
  width: 99%;
  height: 30px;
  background-color: 0A174E;
  border-radius: 3px;
  cursor: pointer;
`;
const GoRegister = styled.span`
  margin-top: 15px;
  font-size: small;
  cursor: pointer;
  border-bottom: 0.5px solid #000;
`;
const GoFindPw = styled.span`
  margin-top: 15px;
  font-size: small;
  cursor: pointer;
  border-bottom: 0.5px solid #000;
  /* margin-bottom: 15px; */
`;
const EzRegisterLabel = styled.span`
  margin-top: 20px;
  font-size: 1em;
  font-weight: bold;
  margin-bottom: 20px;
`;
const ImageBase = styled.div`
  display: inline-flex;
  height: 35px;
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

export default LoginPopup;
