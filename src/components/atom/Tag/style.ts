import theme from "commons/styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  padding: 0px 8px;
  background-color: ${theme.palette.primary};
  color: ${theme.palette.white};
  border-radius: 6px;
  box-shadow: ${theme.layout.shadow100};
`;
export const Title = styled.div`
  ${theme.fontStyle.h2B}
`;
