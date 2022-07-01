import React from "react";
import * as S from "./style";

export type TagProps = {
  title: string;
  onClick: () => {};
};

const Tag = ({ title, onClick }: TagProps) => {
  return (
    <S.Container onClick={onClick}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};

export default Tag;
