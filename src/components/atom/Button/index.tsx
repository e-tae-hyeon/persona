import React from "react";
import * as S from "./style";

export type ButtonProps = {
  children?: React.ReactNode;
  onClick?: () => void;
  theme?: S.Theme;
};

const Button = ({ children, onClick, theme = "transparent" }: ButtonProps) => {
  return (
    <S.Container onClick={onClick} theme={theme}>
      {children}
    </S.Container>
  );
};

export default Button;
