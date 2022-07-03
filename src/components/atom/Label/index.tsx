import React from "react";
import * as S from "./style";

export type LabelProps = {
  title: string;
};

const Label = ({ title }: LabelProps) => {
  return <S.Container>{title}</S.Container>;
};

export default Label;
