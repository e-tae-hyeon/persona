import React from "react";
import * as S from "./style";

export type CellProps = {
  children: React.ReactNode;
  onClick: () => void;
};

const Cell = ({ children, onClick }: CellProps) => {
  return <S.Container onClick={onClick}>{children}</S.Container>;
};

export default Cell;
