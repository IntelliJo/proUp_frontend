import Layout from "../../../components/Layout";
import styled from "styled-components";
import { useState } from "react";
import { getProjectDetail, postCreateProject } from "../../../api/ProjectAPI";
import { useRouter } from "next/router";
import { ProjectTS } from "../../../interfaces";

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
const InputBaseStyle = styled.div`
  width: 50%;
  margin: 55px 25% 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* background-color: gray; */
`;
const InputContainer = styled(InputBaseStyle)`
  width: 100%;
  margin-top: 20px;
  border: 0.5px solid #999;
  border-radius: 5px;
  flex-direction: row;
  align-content: center;
  justify-content: center;
`;
const InputDetailStyle = styled.input`
  font-size: 14px;
  color: #000;
  width: 99%;
  min-width: 735px;
  height: 30px;
  border-radius: 5px;
  border: none;
`;
const InputButton = styled.button`
  display: inline;
  width: 80px;
  margin-right: 10px;
`;
const InputProjectContainer = styled(InputBaseStyle)`
  width: 100%;
  margin-top: 20px;
  border: 0.5px solid #999;
  border-radius: 5px;
  align-content: center;
  justify-content: flex-end;
  margin-bottom: 50px;
`;
const InputProjectTitle = styled.div`
  margin-top: 40px;
  border: none;
  font-size: 1.2em;
  font-weight: bold;
  color: #000;
  width: 90%;
  height: 50px;
`;
const Horizon = styled.hr`
  width: 90%;
  color: #999;
  margin: 40px 0 40px;
`;
const InputProjectContent = styled.textarea`
  border: none;
  font-size: 1em;
  font-weight: bold;
  color: #000;
  width: 90%;
  min-height: 550px;
  resize: none;
`;
const NextButton = styled.button`
  width: 80px;
  /* margin: 20px 0 20px 800px; */
  margin-top: 20px;
  margin-left: 20px;
`;
const ButtonBase = styled.div`
  margin-left: 55%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
`;

const ProjectDetail = ({ data }) => {
  return (
    <Layout title="프로젝트 상세">
      <div>
        <CenterS>
          <div>
            <TitleStyle>
              <TitleFontStyle>프로젝트 상세</TitleFontStyle>
            </TitleStyle>
          </div>
        </CenterS>
        <form>
          <InputBaseStyle>
            <InputProjectContainer>
              <InputProjectTitle>{data.name}</InputProjectTitle>
              <Horizon />
              <InputProjectContent>{data.description}</InputProjectContent>
              <ButtonBase>
                <NextButton>수정</NextButton>
                <NextButton>삭제</NextButton>
              </ButtonBase>
            </InputProjectContainer>
          </InputBaseStyle>
        </form>
      </div>
    </Layout>
  );
};

export default ProjectDetail;

export async function getServerSideProps({ params }) {
  const { data } = await getProjectDetail(params.id);
  return {
    props: {
      data,
    },
  };
}
