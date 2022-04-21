import Link from "next/link";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Layout from "../../components/Layout";
import ProjectHalf from "../../components/ProjectHalf";

const FlexST = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FlexSideST = styled(FlexST)`
  justify-content: space-between;
  align-items: center;
`;

const TitleST = styled.h1`
  font-size: 30px;
  font-weight: bold;
  display: inline-block;
  margin-bottom: 10px;
`;

const ProjectST = styled.h1`
  margin-bottom: 30px;
`;

let data = {
  name: "Project Name",
  content: "Project Content",
  info: "Project Info",
  language: "Programming Language",
  rating: "rating",
};
const MyProject = () => {
  const [arr, setArr] = useState(["진행 중 프로젝트", "관심있는 프로젝트", "완료 프로젝트"]);
  useEffect(() => {
    setArr(arr);
  }, []);

  return (
    <Layout title="myproject">
      <div>
        {arr.map((ele, idx) => (
          <ProjectST key={idx}>
            <FlexSideST>
              <TitleST>{ele}</TitleST>
              <Link href={"#"}>더보기</Link>
            </FlexSideST>
            <FlexST>
              <ProjectHalf data={data} />
              <ProjectHalf data={data} />
            </FlexST>
          </ProjectST>
        ))}
      </div>
    </Layout>
  );
};

export default MyProject;
