import styled from "styled-components";

const HeaderStyle = styled.header`
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
      <span>프로젝트 등록</span>
      <span>알림</span>
      <span>로그인</span>
    </div>
  </HeaderStyle>
);

export default Header;
