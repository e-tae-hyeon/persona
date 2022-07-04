import React from "react";
import * as S from "./style";

export type BallonProps = {
  children: React.ReactNode;
  isVisible: boolean;
};

const Ballon = ({ children, isVisible }: BallonProps) => {
  return <S.Container isVisible={isVisible}>{children}</S.Container>;
};

export default Ballon;
