import React from "react";
import * as S from "./style";

export type TitleProps = {
  title: string;
};

const Title = ({ title }: TitleProps) => {
  return <S.Container>{title}</S.Container>;
};

export default Title;
