import Layout from "../components/Layout";
import styled from "styled-components";
import { theme } from "../styles/theme";
import Image from "next/image";
import java from "../../public/img/java.png";
import mainImg from "../../public/img/main.png";
import Link from "next/link";

const SearchStyle = styled.div`
  background-color: ${theme.colors.bgColor};
  height: 320px;
`;
const CenterS = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 0;
  flex-direction: column;
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
  height: 50px;
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
          <Image src={mainImg} width={400} height={100} alt="mainImg" />
          <InputStyle type="text"></InputStyle>
        </CenterS>
      </SearchStyle>
      <MainStyle className="main">
        <FilterStyle className="filter">
          <ListStyle>
            <Image src={java} width={100} height={100} alt="java" />
          </ListStyle>
          <ListStyle>
            <Image src={java} width={100} height={100} alt="java" />
          </ListStyle>
          <ListStyle>
            <Image src={java} width={100} height={100} alt="java" />
          </ListStyle>
          <ListStyle>
            <Image src={java} width={100} height={100} alt="java" />
          </ListStyle>
          <ListStyle>
            <Image src={java} width={100} height={100} alt="java" />
          </ListStyle>
          <ListStyle>
            <Image src={java} width={100} height={100} alt="java" />
          </ListStyle>
          <ListStyle>
            <Image src={java} width={100} height={100} alt="java" />
          </ListStyle>
          <ListStyle>
            <Image src={java} width={100} height={100} alt="java" />
          </ListStyle>
        </FilterStyle>
        <ProjectsStyle className="projects">
          {/* 프로젝트 시작 */}
          <Link href={`/projects/detail/${1}`}>
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
          </Link>
        </ProjectsStyle>
      </MainStyle>
    </div>
  </Layout>
);

export default IndexPage;
