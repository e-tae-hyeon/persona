import React from "react";
import { BottomSheet } from "components/atom";
import * as S from "./style";
import { FeatureActions } from "components/organism";

export type HomeSliderProps = {
  isVisible: boolean;
};

const HomeSliderView = ({ isVisible }: HomeSliderProps) => {
  return (
    <S.Container>
      <BottomSheet isVisible={isVisible}>
        <FeatureActions />
      </BottomSheet>
    </S.Container>
  );
};

export default HomeSliderView;
