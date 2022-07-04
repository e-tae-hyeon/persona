import theme from "commons/styles/theme";
import styled from "styled-components";

export const Container = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  ${theme.fontStyle.h2B}
  color: ${theme.palette.primary}
`;
