import styled from "styled-components";
import { ProjectTS, SizeTS } from "../interfaces/index";

const ProjectStyle = styled.div<sizeTS>`
  margin: 5px 10px;
  background-color: lightgray;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
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
  border-left: 2px solid white;
  padding-left: 5px;
  height: 100%;
`;

type Props = {
  data: ProjectTS;
};
type sizeTS = {
  width: string;
  height: string;
};

//프로젝트 컴포넌트 (가로 긴 버전)
const Project = ({ data }: Props, size: sizeTS) => (
  <ProjectStyle className="project" width={size.width} height={size.height}>
    <InnerStyle>
      <TitleStyle className="project-Title">
        <span>{data.name}</span>
        <span>{data.content}</span>
      </TitleStyle>
      <SubtitleStyle className="project-subTitle">
        <span>{data.info}</span>
        <span>{data.language}</span>
        <span>{data.rating}</span>
      </SubtitleStyle>
    </InnerStyle>
  </ProjectStyle>
);

export default Project;
