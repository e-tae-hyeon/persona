import { ADD_BUTTON } from "commons/constants/string";
import { Button } from "components/atom";
import React from "react";
import { SliderContent } from "store/slider/type";
import Action from "../Action";
import ImageAction from "../ImageAction";
import * as S from "./style";

export type FeatureActionsProps = {
  content: SliderContent;
  onAdd: () => void;
};

const FeatureActionsView = ({ content, onAdd }: FeatureActionsProps) => {
  if (content === "image")
    return (
      <S.Container>
        <ImageAction />
      </S.Container>
    );
  return (
    <S.Container>
      <S.Add>
        {content !== "name" && (
          <Button onClick={onAdd} theme="primary">
            {ADD_BUTTON}
          </Button>
        )}
      </S.Add>
      <Action />
    </S.Container>
  );
};

export default FeatureActionsView;
