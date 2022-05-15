import { getApi } from "./baseApi";

/* 프로젝트 관련 api */

// 프로젝트 목록 조회
export const getProject = () => {
  const url = `/api/v1/proup/project?page=0&size=5&sort=id`;
  const data = getApi(url);
  return data;
};
