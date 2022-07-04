import React from "react";
import * as S from "./style";

export type ButtonProps = {
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onContextMenu?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  value?: string;
  theme?: S.Theme;
  full?: boolean;
};

const Button = ({
  children,
  onClick,
  onContextMenu,
  value,
  theme = "transparent",
  full = false,
}: ButtonProps) => {
  return (
    <S.Container
      onClick={onClick}
      onContextMenu={onContextMenu}
      theme={theme}
      value={value}
      full={full}
    >
      {children}
    </S.Container>
  );
};

export default Button;
