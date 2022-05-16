import { getApi, postApi, patchApi, deleteApi } from "./baseApi";
import { ProjectTS } from "../interfaces";

/* 프로젝트 관련 api */

// 프로젝트 목록 조회
export const getProjectList = () => {
  const url = `/api/v1/proup/project?page=0&size=5&sort=id`;
  const data = getApi(url);
  return data;
};

// 프로젝트 등록 api
export const postCreateProject = (body: ProjectTS) => {
  const url = `/api/v1/proup/project`;
  const data = postApi(url, body);
  return data;
};

// 프로젝트 수정 api
export const putModifyProject = (id: string) => {
  const url = `/api/v1/proup/project/${id}`;
  const data = patchApi(url);
  return data;
};

// 프로젝트 삭제 api
export const deleteProject = (id: string) => {
  const url = `/api/v1/proup/project/${id}`;
  const data = deleteApi(url);
  return data;
};
