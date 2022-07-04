import useSlider from "hooks/useSlider";
import React from "react";
import HomeSliderView, { HomeSliderProps } from "./view";

const HomeSlider = () => {
  const { slider, onOpenSlider, onSetSelected } = useSlider();
  const props: HomeSliderProps = {
    isVisible: slider,
    onBackdrop: () => {
      onSetSelected(null);
      onOpenSlider();
    },
  };
  return <HomeSliderView {...props} />;
};

export default HomeSlider;
