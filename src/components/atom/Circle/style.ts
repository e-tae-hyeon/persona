import theme from "commons/styles/theme";
import styled from "styled-components";

export const Container = styled.span<{ bgColor: string; size: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 100%;
  background-color: ${(props) => props.bgColor};
  color: ${theme.palette.white};
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  box-shadow: ${theme.layout.shadow100};
`;
