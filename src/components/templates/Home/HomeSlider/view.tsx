import React from "react";
import { BottomSheet } from "components/atom";
import * as S from "./style";
import { FeatureActions } from "components/organism";

export type HomeSliderProps = {
  isVisible: boolean;
  onBackdrop: () => void;
};

const HomeSliderView = ({ isVisible, onBackdrop }: HomeSliderProps) => {
  return (
    <S.Container>
      <BottomSheet isVisible={isVisible} onBackdrop={onBackdrop}>
        <FeatureActions />
      </BottomSheet>
    </S.Container>
  );
};

export default HomeSliderView;
