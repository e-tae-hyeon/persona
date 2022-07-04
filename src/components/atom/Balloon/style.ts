import theme from "commons/styles/theme";
import styled from "styled-components";

export const Container = styled.div<{ isVisible: boolean }>`
  display: ${(props) => (props.isVisible ? "flex" : "none")};
  position: absolute;
  right: 2rem;
  bottom: 10rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  width: 250px;
  height: 250px;
  background: ${theme.palette.white};
  border-radius: 8px;
  box-shadow: ${theme.layout.shadow200};

  &::after {
    border-top: 10px solid ${theme.palette.white};
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 0px solid transparent;
    content: "";
    position: absolute;
    top: 250px;
    left: 160px;
  }
`;
