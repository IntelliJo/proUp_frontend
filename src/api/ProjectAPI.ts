import { getApi, postApi, patchApi, deleteApi } from "./baseApi";
import { ProjectTS } from "../interfaces";

/* 프로젝트 관련 api */

// 프로젝트 목록 조회
export const getProjectList = () => {
  const url = `/api/v1/proup/project?page=0&size=5&sort=id`;
  return getApi(url);
};
// 프로젝트 상세 조회
export const getProjectDetail = (id: string) => {
  const url = `/api/v1/proup/project/${id}`;
  return getApi(url);
};

// 프로젝트 등록 api
export const postCreateProject = (body: ProjectTS) => {
  const url = `/api/v1/proup/project`;
  return postApi(url, body);
};

// 프로젝트 수정 api
export const putModifyProject = (id: string) => {
  const url = `/api/v1/proup/project/${id}`;
  return patchApi(url);
};

// 프로젝트 삭제 api
export const deleteProject = (id: string) => {
  const url = `/api/v1/proup/project/${id}`;
  return deleteApi(url);
};
