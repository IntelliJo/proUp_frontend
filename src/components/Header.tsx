import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Header = () => (
  <Container>
    <span>왼쪽</span>
    <span>가운데</span>
    <span>오른쪽</span>
  </Container>
);

export default Header;
