import React from "react";
import * as S from "./style";

export type CircleProps = {
  children: React.ReactNode;
};

const Circle = ({ children }: CircleProps) => {
  return <S.Container>{children}</S.Container>;
};

export default Circle;
