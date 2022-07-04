import theme from "commons/styles/theme";
import styled from "styled-components";

export const Floating = styled.div`
  position: absolute;
  bottom: 5rem;
  right: 5rem;
  cursor: pointer;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;

export const StyledText = styled.div`
  word-break: keep-all;
  ${theme.fontStyle.b2L};
`;
export const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${theme.fontStyle.h2B}
`;
