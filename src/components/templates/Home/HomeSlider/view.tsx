import React from "react";
import { BottomSheet } from "components/atom";
import FeatureActions from "components/organism/FeatureActions";
import * as S from "./style";

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
