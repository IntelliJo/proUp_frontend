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

export interface ProjectTS {
  name: string;
  content: string;
  info: string;
  language: string;
  rating: string;
}
