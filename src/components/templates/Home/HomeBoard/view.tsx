import { Person, Personalities } from "components/organism";
import React from "react";

import * as S from "./style";

// eslint-disable-next-line react/display-name
const HomeBoardView = React.forwardRef<HTMLDivElement>(({}, ref) => {
  return (
    <S.Container ref={ref}>
      <Person />
      <Personalities />
    </S.Container>
  );
});

export default HomeBoardView;
