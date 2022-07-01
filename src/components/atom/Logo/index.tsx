import { LOGOTYPE } from "commons/constants/string";
import Link from "next/link";
import React from "react";
import * as S from "./style";

const Logo = () => {
  return (
    <Link href={"/"} passHref>
      <a>
        <S.Logo>{LOGOTYPE}</S.Logo>
      </a>
    </Link>
  );
};

export default Logo;
