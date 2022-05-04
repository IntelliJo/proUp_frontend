import Image from "next/image";
import styled from "styled-components";
import userImg from "../../../public/img/userimg.png";
import { SizeTS, ColorTS } from "../../interfaces/index";
import Layout from "../../components/Layout";

const MainTitleST = styled.h1`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
`;
const SubTitleST = styled.h5`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const WrapSt = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleSt = styled.div<SizeTS>`
  width: ${(props) => props.size};
  margin-bottom: 30px;
`;
const BodySt = styled(TitleSt)<SizeTS>`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WidthFormSt = styled.form`
  width: 100%;
`;
const WidthDivSt = styled.div`
  width: 100%;
  margin-bottom: 15px;
`;
const WidthInputSt = styled.input`
  margin: 5px 0;
  width: 100%;
  border: 1px solid lightgray;
  border-radius: 15px;
  height: 26px;
  padding: 8px 6px;

  &::placeholder {
    padding: 5px 10px;
  }
`;

const BtnDivSt = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const BtnInputSt = styled.input.attrs((props) => ({
  type: props.type,
  value: props.value,
}))<ColorTS>`
  cursor: pointer;
  border: none;
  margin-left: 5px;
  margin-bottom: 10px;
  width: 65px;
  height: 30px;
  color: white;
  box-shadow: 1px 3px 5px grey;
  background-color: ${(props) =>
    props.color == "red" ? props.theme.colors.red : props.theme.colors.green};
`;

const MyPage = () => (
  <Layout title={"마이페이지"}>
    <WrapSt>
      <TitleSt size={"40%"}>
        <MainTitleST>내 정보</MainTitleST>
        <SubTitleST>내 정보를 확인하거나 수정할 수 있습니다.</SubTitleST>
      </TitleSt>

      <BodySt size={"35%"}>
        <Image src={userImg} width={200} height={200} />
        <WidthFormSt>
          <WidthDivSt>
            이름
            <br />
            <WidthInputSt type={"text"} id="name" name="name" placeholder="이름" />
          </WidthDivSt>
          <WidthDivSt>
            닉네임
            <br />
            <WidthInputSt type={"text"} id="nickname" name="nickname" placeholder="닉네임" />
          </WidthDivSt>
          <WidthDivSt>
            전화번호
            <br />
            <WidthInputSt type={"phone"} id="name" name="name" placeholder="010-0000-0000" />
          </WidthDivSt>
          <WidthDivSt>
            포지션
            <br />
            <WidthInputSt type={"text"} id="name" name="name" placeholder="FRONT-END" />
          </WidthDivSt>
          <WidthDivSt>
            기술스택
            <br />
            <WidthInputSt type={"text"} id="name" name="name" />
          </WidthDivSt>
          <WidthDivSt>
            주소
            <br />
            <WidthInputSt
              type={"text"}
              id="name"
              name="name"
              placeholder="서울 특별시 강남구 테헤란로"
            />
          </WidthDivSt>
          <BtnDivSt>
            <BtnInputSt type={"submit"} value={"수정"} color={"red"} />
            <BtnInputSt type={"reset"} value={"완료"} color={"green"} />
          </BtnDivSt>
        </WidthFormSt>
      </BodySt>
    </WrapSt>
  </Layout>
);

export default MyPage;
