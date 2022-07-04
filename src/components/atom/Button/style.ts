import theme from "commons/styles/theme";
import styled from "styled-components";

export type Theme = "primary" | "secondary" | "transparent";
type ContainerProps = {
  theme: Theme;
  full: boolean;
};

export const Container = styled.button<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  width: ${(props: ContainerProps) => props.full && "100%"};
  min-height: 2rem;
  border-radius: 1rem;
  background: ${(props: ContainerProps) =>
    props.theme === "primary"
      ? theme.palette.primary
      : props.theme === "secondary"
      ? theme.palette.gray300
      : "initial"};
  cursor: pointer;
`;
