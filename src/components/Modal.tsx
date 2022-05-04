import styled from "styled-components";
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import btnClose from "../../public/img/btn-close.svg";

type Props = {
  visible?: boolean,
  closeEvent?: (e?: React.MouseEvent<HTMLDivElement>) => void;
  children? : React.ReactNode,
}

Modal.defaultProps = {
  visible: false,
};

function Modal ({visible, closeEvent, children} : Props) {
  const [closed, setClosed] = useState(true);
  useEffect(() => {
    document.body.style.overflowY = visible ? 'hidden' : 'initial';

    let timeoutId: any;
    if (visible) {
      setClosed(false);
    } else {
      timeoutId = setTimeout(() => {
        setClosed(true);
      }, 20000);
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [visible]);

  useEffect(() => {
    return () => {
      document.body.style.overflowY = 'initial';
    };
  }, []);

  if (!visible && closed) return null;

  return (
    <>
      <PopupOverlay visible={visible}>
        <div className="modal_back" onClick={closeEvent} />
        <PopupWrapper className="로그인" tabIndex={-1} visible={visible}>
          <PopupInner tabIndex={0} className="popup-inner">
          <CloseButton className="modal-close" onClick={closeEvent}>
            <Image src={btnClose} />
          </CloseButton>
            {children}
          </PopupInner>
        </PopupWrapper>
      </PopupOverlay>
    </>
  );
}

const PopupOverlay = styled.div<{visible: boolean}>`
  box-sizing: border-box;
  position: fixed;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`

const PopupWrapper = styled.div<{visible: boolean}>`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`

const PopupInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: 600px;
  /* max-width: 480px; */
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 40px 20px;
`
const CloseButton = styled.div`
  box-sizing: border-box;
  display: inline-block;
  overflow: hidden;
  width: initial;
  height: initial;
  background: none;
  opacity: 1;
  border: 0px;
  margin: 0px;
  padding: 0px;
  position: relative;
  max-width: 100%;
  top: -20px;
  left: 540px;
  cursor: pointer;
  /* background-image: url(${btnClose}); */
`
export default Modal