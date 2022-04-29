import styled from "styled-components";
import LoginPopup from "./LoginPopup";
import Modal from "./Modal";
import React, { useState } from 'react';

const HeaderStyle = styled.header`
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
    alert('이벤트 실행');
  };
  
  return(
    <HeaderStyle>
    <span>proUp</span>
    <div>
      <span>프로젝트 등록</span>
      <span>알림</span>
      <span onClick={onClickModalOn}>로그인</span>
      <Modal visible={isActive} closeEvent={onClickModalOff}>
        <LoginPopup closeEvent={onClickModalOff} actionEvent={onClickModalRemove}></LoginPopup>
      </Modal>
    </div>
  </HeaderStyle>
  )
  
};

export default Header;
