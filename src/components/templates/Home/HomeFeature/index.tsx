import Cell from "components/atom/Cell";
import React from "react";
import * as S from "./style";

export type HomeFeatureProps = {
  title: string;
  onClick: () => void;
};

const HomeFeature = ({ title, onClick }: HomeFeatureProps) => {
  return (
    <Cell onClick={onClick}>
      <S.Title>{title}</S.Title>
    </Cell>
  );
};

export default HomeFeature;
