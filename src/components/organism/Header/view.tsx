import { LOGOTYPE, SAVE_BUTTON } from "commons/constants/string";
import { Button, Title } from "components/atom";
import React from "react";
import * as S from "./style";

export type HeaderProps = {
  onSave: () => void;
};

const HeaderView = ({ onSave }: HeaderProps) => {
  return (
    <S.Container>
      <Title title={LOGOTYPE} />
      <Button onClick={onSave}>{SAVE_BUTTON}</Button>
    </S.Container>
  );
};

export default HeaderView;
