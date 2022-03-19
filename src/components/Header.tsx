import React from "react";
import styled from "styled-components";
import { theme } from "../styles/theme";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: ${theme.colors.blue};
`;

const Header = () => (
  <Container>
    <span>왼쪽</span>
    <span>가운데</span>
    <span>오른쪽</span>
  </Container>
);

export default Header;
