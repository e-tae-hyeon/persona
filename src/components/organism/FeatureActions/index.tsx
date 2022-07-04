import useSlider from "hooks/useSlider";
import React from "react";

import FeatureActionsView, { FeatureActionsProps } from "./view";

const FeatureActions = () => {
  const { content, isTypeInput, onToggleSliderType } = useSlider();
  const props: FeatureActionsProps = {
    content,
    onAdd: () => onToggleSliderType(),
    isInput: isTypeInput,
  };
  return <FeatureActionsView {...props} />;
};

export default FeatureActions;
