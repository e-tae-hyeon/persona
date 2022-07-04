import Cell from "components/atom/Cell";
import { PersonImage } from "components/molecule";
import { StaticImageData } from "next/image";
import React from "react";
import * as S from "./style";

export type PersonProps = {
  image: StaticImageData;
  onClick: () => void;
  age: string;
  gender: string;
  isSelected: boolean;
};

const PersonView = ({
  image,
  onClick,
  age,
  gender,
  isSelected,
}: PersonProps) => {
  return (
    <S.Container>
      <PersonImage image={image} />
      <Cell onClick={onClick} isSelected={isSelected}>
        <S.RowContainer>
          <S.Age>{age}</S.Age>
          <S.Gender>{gender}</S.Gender>
        </S.RowContainer>
      </Cell>
    </S.Container>
  );
};

export default PersonView;
