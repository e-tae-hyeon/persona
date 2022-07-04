import { ADD_BUTTON, SELECTION_BUTTON } from "commons/constants/string";
import { Button } from "components/atom";
import React from "react";
import { SliderContent } from "store/slider/type";
import Action from "../Action";
import ImageAction from "../ImageAction";
import * as S from "./style";

export type FeatureActionsProps = {
  content: SliderContent;
  onAdd: () => void;
  isInput: boolean;
};

const FeatureActionsView = ({
  content,
  onAdd,
  isInput,
}: FeatureActionsProps) => {
  if (content === "image")
    return (
      <S.Container>
        <ImageAction />
      </S.Container>
    );
  return (
    <S.Container>
      <Action />
      {content !== "name" && content !== "painPoint" && (
        <Button onClick={onAdd} theme="primary" full>
          {!isInput ? ADD_BUTTON : SELECTION_BUTTON}
        </Button>
      )}
    </S.Container>
  );
};

export default FeatureActionsView;
