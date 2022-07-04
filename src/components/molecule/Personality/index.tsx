import { Label } from "components/atom";
import Cell from "components/atom/Cell";
import React from "react";
import Feature from "../Feature";
import * as S from "./style";

export type PersonalityProps = {
  title: string;
  onClick: () => void;
  content?: string;
  contents?: string[];
  isSelected: boolean;
};

const Personality = ({
  title,
  content,
  onClick,
  contents,
  isSelected,
}: PersonalityProps) => {
  return (
    <S.Container>
      <Label title={title} />
      <Cell onClick={onClick} isSelected={isSelected}>
        <Feature contents={contents} content={content} />
      </Cell>
    </S.Container>
  );
};

export default Personality;
