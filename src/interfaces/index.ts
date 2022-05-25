// 공통 interface 선언 파일

export type User = {
  id: number;
  name: string;
};

export interface SizeTS {
  size: string;
}
export interface ColorTS {
  type: string;
  value: string;
  color: string;
}

//프로젝트 타입
export interface ProjectTS {
  name: string;
  description: string;
  info?: string;
  language?: string;
  rating?: string;
}

// 회원가입
export interface JoinUserTS {
  id : string;
  pw : string;
  phone : string;
  email : string;
  authNum : string;
}

// 로그인
export interface LoginUserTS {
  id : string;
  pw: string;
}