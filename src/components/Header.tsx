import styled from "styled-components";

const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Header = () => (
  <HeaderStyle>
    <span>로고</span>
    <HeaderStyle>
      <span>유저사진</span>
      <span>메뉴버튼</span>
    </HeaderStyle>
  </HeaderStyle>
);

export default Header;
