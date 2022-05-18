import Layout from "../../components/Layout";
import styled from "styled-components";

const CenterS = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  margin: 8% 9% 0;
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
const BaseStyle = styled.div`
  width: 50%;
  margin: 55px 25% 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const DevContainer = styled(BaseStyle)`
  width: 100%;
  margin-top: 20px;
  border: 0.5px solid #999;
  border-radius: 5px;
  align-content: center;
  justify-content: center;
  margin-bottom: 50px;
  flex-direction: column;
`;
const DevDetailStyle = styled.div`
  margin: 20px 0;
  font-size: 14px;
  color: #000;
  width: 90%;
  height: 30px;
  border-radius: 5px;
  border: 0.5px solid #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const DevButton = styled.button`
  display: inline;
  width: 40px;
  margin-right: 10px;
  font-size: 10px;
`;
const DevName = styled.span`
  font-size: 1em;
  font-weight: bold;
`;
const DevSpec = styled.span`
  font-size: 1em;
  font-weight: bold;
`;
const DevAnnual = styled.span`
  font-size: 1em;
  font-weight: bold;
`;

const ApplyList = () => {
  return (
    <Layout title="신청자 목록">
      <div>
        <CenterS>
          <div>
            <TitleStyle>
              <TitleFontStyle>신청자 목록</TitleFontStyle>
            </TitleStyle>
          </div>
        </CenterS>
        <BaseStyle>
          <DevContainer>
            <DevDetailStyle>
              <DevName>개발자</DevName>
              <DevSpec>기술 스택</DevSpec>
              <DevAnnual>연차</DevAnnual>
              <DevButton>선택</DevButton>
              <DevButton>취소</DevButton>
            </DevDetailStyle>
            <DevDetailStyle>
              <DevName>개발자</DevName>
              <DevSpec>기술 스택</DevSpec>
              <DevAnnual>연차</DevAnnual>
              <DevButton>선택</DevButton>
              <DevButton>취소</DevButton>
            </DevDetailStyle>
            <DevDetailStyle>
              <DevName>개발자</DevName>
              <DevSpec>기술 스택</DevSpec>
              <DevAnnual>연차</DevAnnual>
              <DevButton>선택</DevButton>
              <DevButton>취소</DevButton>
            </DevDetailStyle>
          </DevContainer>
        </BaseStyle>
      </div>
    </Layout>
  );
};

export default ApplyList;
