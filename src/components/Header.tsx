import Link from "next/link";
import styled from "styled-components";
import { theme } from "../styles/theme";

const HeaderStyle = styled.header`
  background-color: ${theme.colors.bgColor};
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = () => (
  <HeaderStyle>
    <span>proUp</span>
    <div>
      <Link href="#">프로젝트 등록</Link>
      <span>알림</span>
      <span>로그인</span>
    </div>
  </HeaderStyle>
);

export default Header;
