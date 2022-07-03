import useSlider from "hooks/useSlider";
import React from "react";
import HomeSliderView, { HomeSliderProps } from "./view";

const HomeSlider = () => {
  const { slider } = useSlider();
  const props: HomeSliderProps = {
    isVisible: slider,
  };
  return <HomeSliderView {...props} />;
};

export default HomeSlider;
