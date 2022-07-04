import { LOGOTYPE, SAVE_BUTTON } from "commons/constants/string";
import { Button, Title } from "components/atom";
import React from "react";
import * as S from "./style";

export type HeaderProps = {};

const HeaderView = ({}: HeaderProps) => {
  return (
    <S.Container>
      <Title title={LOGOTYPE} />
    </S.Container>
  );
};

export default HeaderView;
