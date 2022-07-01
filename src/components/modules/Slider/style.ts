import theme from "commons/styles/theme";
import styled from "styled-components";

export const Container = styled.div<{ isVisible: boolean }>`
  position: absolute;
  bottom: 0;
  padding: 16px;
  width: 960px;
  height: 120px;
  border-radius: 8px;
  box-shadow: ${theme.layout.shadow200};
`;
