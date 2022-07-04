import theme from "commons/styles/theme";
import styled from "styled-components";

export const Dim = styled.div<{ isVisible: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${theme.palette.gray500};
  opacity: 0.5;
  z-index: 5;
  visibility: ${(props) => (props.isVisible ? "initial" : "hidden")};
  cursor: pointer;
`;

export const Container = styled.div<{ isVisible: boolean }>`
  position: absolute;
  bottom: 0;
  width: 90vw;
  max-width: 1300px;
  height: 25vh;
  padding: 16px;
  border-radius: 8px;
  background-color: ${theme.palette.white};
  box-shadow: ${theme.layout.shadow200};
  z-index: 10;
  visibility: ${(props) => (props.isVisible ? "initial" : "hidden")};
`;
