import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      red: string;
      green: string;
      bgColor: string;
    };
    marginSide: string;
    origin: {
      width: string;
      height: string;
    };
  }
}
