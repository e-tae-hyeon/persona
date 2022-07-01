import React from "react";
import * as S from "./style";

export type SliderProps = {
  isVisible: boolean;
  children: React.ReactNode;
};

const Slider = ({ isVisible, children }: SliderProps) => {
  return <S.Container isVisible={isVisible}>{children}</S.Container>;
};

export default Slider;
