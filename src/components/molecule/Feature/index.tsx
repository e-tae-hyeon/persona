import { Button } from "components/atom";
import React from "react";
import * as S from "./style";

export type FeatureProps = {
  content?: string;
  contents?: string[];
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onContextMenu?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Feature = ({
  content,
  contents,
  onClick,
  onContextMenu,
}: FeatureProps) => {
  return (
    <S.RowContainer>
      {content}
      {contents &&
        contents.map((t) => (
          <Button
            onClick={onClick}
            onContextMenu={onContextMenu}
            theme="secondary"
            key={t}
            value={t}
          >
            {t}
          </Button>
        ))}
    </S.RowContainer>
  );
};

export default Feature;
