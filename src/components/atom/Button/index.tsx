import React from "react";
import * as S from "./style";

export type ButtonProps = {
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  value?: string;
  theme?: S.Theme;
};

const Button = ({
  children,
  onClick,
  value,
  theme = "transparent",
}: ButtonProps) => {
  return (
    <S.Container onClick={onClick} theme={theme} value={value}>
      {children}
    </S.Container>
  );
};

export default Button;
