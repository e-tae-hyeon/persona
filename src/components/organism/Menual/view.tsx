import {
  MENUAL_BUTTON,
  MENUAL_CONTENT_FIRST,
  MENUAL_CONTENT_SECOND,
  MENUAL_CONTENT_THIRD,
} from "commons/constants/string";
import theme from "commons/styles/theme";
import { Ballon, Circle } from "components/atom";
import React from "react";
import * as S from "./style";

export type MenualProps = {
  isVisible: boolean;
  onClick: () => void;
};

const MenualView = ({ isVisible, onClick }: MenualProps) => {
  return (
    <>
      <Ballon isVisible={isVisible}>
        <S.Container>
          <S.StyledText>{MENUAL_CONTENT_FIRST}</S.StyledText>
          <S.StyledText>{MENUAL_CONTENT_SECOND}</S.StyledText>
          <S.StyledText>{MENUAL_CONTENT_THIRD}</S.StyledText>
        </S.Container>
      </Ballon>
      <S.Floating onClick={onClick}>
        <Circle bgColor={theme.palette.primary} size={60}>
          <S.Text>{MENUAL_BUTTON}</S.Text>
        </Circle>
      </S.Floating>
    </>
  );
};

export default MenualView;
