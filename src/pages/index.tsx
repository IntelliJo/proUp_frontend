import Layout from "../components/Layout";
import styled from "styled-components";

const SearchStyle = styled.div`
  background-color: #dad9ff;
  height: 320px;
`;
const CenterS = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 180px 0;
`;
const InputStyle = styled.input`
  border-radius: 15px;
  width: 370px;
  height: 28px;
  border: none;
`;
const MainStyle = styled.div`
  margin: 0px 20%;
`;
const FilterStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ListStyle = styled.div`
  margin: 10px;
  display: inline-block;
  width: 50px;
`;

const ProjectsStyle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const ProjectStyle = styled.div`
  margin: 5px 0px;
  background-color: lightgray;
  height: 140px;
  width: 100%;
  border-radius: 15px;
`;

const InnerStyle = styled.div`
  box-sizing: border-box;
  padding: 22px;
  display: flex;
  height: 100%;
`;
const TitleStyle = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  justify-content: center;
`;
const SubtitleStyle = styled(TitleStyle)`
  flex: 1;
  border-left: 1px solid gray;
  padding-left: 5px;
  height: 100%;
`;
const IndexPage = () => (
  <Layout title="proUp">
    <div>
      <SearchStyle className="search">
        <CenterS>
          <InputStyle type="text"></InputStyle>
        </CenterS>
      </SearchStyle>
      <MainStyle className="main">
        <FilterStyle className="filter">
          <ListStyle>프레임워크</ListStyle>
          <ListStyle>프레임워크</ListStyle>
          <ListStyle>프레임워크</ListStyle>
          <ListStyle>프레임워크</ListStyle>
          <ListStyle>프레임워크</ListStyle>
          <ListStyle>프레임워크</ListStyle>
          <ListStyle>프레임워크</ListStyle>
          <ListStyle>프레임워크</ListStyle>
          <ListStyle>프레임워크</ListStyle>
          <ListStyle>프레임워크</ListStyle>
        </FilterStyle>
        <ProjectsStyle className="projects">
          {/* 프로젝트 시작 */}
          <ProjectStyle className="project">
            <InnerStyle>
              <TitleStyle className="project-Title">
                <span>Project Name</span>
                <span>Project Content</span>
              </TitleStyle>
              <SubtitleStyle className="project-subTitle">
                <span>Project Info</span>
                <span>Programming Language</span>
                <span>Recuitment</span>
              </SubtitleStyle>
            </InnerStyle>
          </ProjectStyle>
        </ProjectsStyle>
      </MainStyle>
    </div>
  </Layout>
);

export default IndexPage;
