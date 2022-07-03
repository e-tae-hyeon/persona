import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "store";
import { setSlider, toggleType } from "store/slider";
import { SliderContent } from "store/slider/type";
import { toggleSlider } from "store/ui";

const useSlider = () => {
  const dispatch = useDispatch();
  const { slider } = useSelector((state) => state.ui);
  const { content, isTypeInput } = useSelector((state) => state.slider);

  const onOpenSlider = useCallback(() => {
    if (!slider) dispatch(toggleSlider());
  }, [dispatch, slider]);
  const onSetSliderContent = useCallback(
    (value: SliderContent) => {
      dispatch(setSlider(value));
      if (value === content && slider) dispatch(toggleSlider());
    },
    [dispatch, content, slider]
  );
  const onToggleSliderType = useCallback(
    () => dispatch(toggleType()),
    [dispatch]
  );

  return {
    slider,
    content,
    isTypeInput,
    onOpenSlider,
    onSetSliderContent,
    onToggleSliderType,
  };
};

export default useSlider;
