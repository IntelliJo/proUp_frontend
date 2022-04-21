// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

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
