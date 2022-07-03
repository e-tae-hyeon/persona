import React from "react";
import * as S from "./style";

export type CellProps = {
  children: React.ReactNode;
  onClick: () => void;
  isSelected: boolean;
};

const Cell = ({ children, onClick, isSelected }: CellProps) => {
  return (
    <S.Container onClick={onClick} isSelected={isSelected}>
      {children}
    </S.Container>
  );
};

export default Cell;
