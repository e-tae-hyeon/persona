import React from "react";
import * as S from "./style";

export type CircleProps = {
  children: React.ReactNode;
  bgColor?: string;
  size: number;
};

const Circle = ({ children, bgColor = "transparent", size }: CircleProps) => {
  return (
    <S.Container bgColor={bgColor} size={size}>
      {children}
    </S.Container>
  );
};

export default Circle;
