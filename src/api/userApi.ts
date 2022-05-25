import { getApi, postApi } from "./baseApi";
import { JoinUserTS, LoginUserTS } from "../interfaces";

/* 사용자 관련 API */

// 아이디 중복확인
export const getDupulicateId = (checkId: string) => {
  const url = `/api/v1/proup/user/${checkId}`;
  const data:any = getApi(url);
  return data;
}

// 회원가입
export const postJoinUser = (body : JoinUserTS) => {
    const url = `/api/v1/proup/user`;
    return postApi(url, body);
};

// 로그인
export const postLoginUser = (body : LoginUserTS) => {
  const url = `/api/v1/proup/user/login`;
  return postApi(url, body)
}