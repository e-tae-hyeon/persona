import useSlider from "hooks/useSlider";
import React from "react";

import FeatureActionsView, { FeatureActionsProps } from "./view";

const FeatureActions = () => {
  const { content, onToggleSliderType } = useSlider();
  const props: FeatureActionsProps = {
    content,
    onAdd: () => onToggleSliderType(),
  };
  return <FeatureActionsView {...props} />;
};

export default FeatureActions;
