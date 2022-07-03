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
};

const Personality = ({
  title,
  content,
  onClick,
  contents,
}: PersonalityProps) => {
  return (
    <S.Container>
      <Label title={title} />
      <Cell onClick={onClick} isSelected>
        <Feature contents={contents} content={content} />
      </Cell>
    </S.Container>
  );
};

export default Personality;
