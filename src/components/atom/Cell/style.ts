import theme from "commons/styles/theme";
import styled, { css } from "styled-components";

export const Container = styled.div<{ isSelected: boolean }>`
  padding: 16px;
  width: 400px;
  border-radius: 8px;
  border: 2px solid ${theme.palette.white};
  box-shadow: ${theme.layout.shadow100};
  cursor: pointer;

  ${(props) =>
    props.isSelected &&
    css`
      border: 2px solid ${theme.palette.primary};
    `}
`;
