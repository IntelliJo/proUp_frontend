import styled from "styled-components";

const HeaderStyle = styled.header`
  position: fixed;
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = () => (
  <HeaderStyle>
    <span>로고</span>
    <div>
      <span>유저사진</span>
      <span>메뉴버튼</span>
    </div>
  </HeaderStyle>
);

export default Header;
