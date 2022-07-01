import Cell from "components/atom/Cell";
import { StaticImageData } from "next/image";
import React from "react";
import HomePersonImage from "../HomePersonImage";
import * as S from "./style";

export type HomePersonProps = {
  image: StaticImageData;
  onClick: () => void;
  age: string;
  gender: string;
};

const HomePersonView = ({ image, onClick, age, gender }: HomePersonProps) => {
  return (
    <S.Container>
      <HomePersonImage image={image} />
      <Cell onClick={onClick}>
        <S.RowContainer>
          <S.Age>{age}</S.Age>
          <S.Gender>{gender}</S.Gender>
        </S.RowContainer>
      </Cell>
    </S.Container>
  );
};

export default HomePersonView;
