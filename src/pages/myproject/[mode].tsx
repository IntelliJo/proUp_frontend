import Layout from "../../components/Layout";
import Project from "../../components/Project";

let title = "진행 중 프로젝트";
let projects = [
  {
    name: "Project Name",
    content: "Project Content",
    info: "Project Info",
    language: "Programming Language",
    rating: "rating",
  },
];

const Mode = () => {
  return (
    <Layout title="myproject">
      <div>{title}</div>
      {projects.map((project, idx) => (
        <div key={idx}>
          <div>
            <Project data={project} />
          </div>
        </div>
      ))}
    </Layout>
  );
};

export default Mode;
