import Link from "next/link";
import styled from "styled-components";
import { theme } from "../styles/theme";
import LoginPopup from "./users/LoginPopup";
import Modal from "./Modal";
import React, { useState } from "react";

const HeaderStyle = styled.header`
  background-color: ${theme.colors.bgColor};
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const onClickModalOn = () => {
    setIsActive(true);
  };

  const onClickModalOff = () => {
    setIsActive(false);
  };

  const onClickModalRemove = () => {
    alert("이벤트 실행");
  };
  return (
    <HeaderStyle>

      <Link href="/">proUp</Link>
      <div>
        <Link href="/projects/regist">프로젝트 등록</Link>
        <span>알림</span>
        <span onClick={onClickModalOn}>로그인</span>
        <Modal visible={isActive} closeEvent={onClickModalOff}>
          {/* <LoginPopup closeEvent={onClickModalOff} actionEvent={onClickModalRemove}></LoginPopup> */}
          <LoginPopup></LoginPopup>
        </Modal>
      </div>
    </HeaderStyle>
  );
};

export default Header;
