import theme from "commons/styles/theme";
import styled from "styled-components";

export type Theme = "primary" | "secondary" | "transparent";
type ContainerProps = {
  theme: Theme;
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  height: 2rem;
  border-radius: 1rem;
  background: ${(props: ContainerProps) =>
    props.theme === "primary"
      ? theme.palette.primary
      : props.theme === "secondary"
      ? theme.palette.gray300
      : "initial"};
  cursor: pointer;
`;
