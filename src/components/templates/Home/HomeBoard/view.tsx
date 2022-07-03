import { Person, Personalities } from "components/organism";
import React from "react";

import * as S from "./style";

const HomeBoardView = () => {
  return (
    <S.Container>
      <Person />
      <Personalities />
    </S.Container>
  );
};

export default HomeBoardView;
