import { Button } from "components/atom";
import React from "react";
import * as S from "./style";

export type FeatureProps = {
  content?: string;
  contents?: string[];
  onClick?: () => void;
};

const Feature = ({ content, contents, onClick }: FeatureProps) => {
  return (
    <S.RowContainer>
      {content}
      {contents &&
        contents.map((t) => (
          <Button onClick={onClick} theme="secondary" key={t}>
            {t}
          </Button>
        ))}
    </S.RowContainer>
  );
};

export default Feature;
