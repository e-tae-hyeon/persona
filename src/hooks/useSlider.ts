import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "store";
import { setSlider, setTypeSelection, toggleType } from "store/slider";
import { SliderContent } from "store/slider/type";
import { setSelected, toggleSlider } from "store/ui";
import { Personality } from "store/ui/type";

const useSlider = () => {
  const dispatch = useDispatch();
  const { slider, selected } = useSelector((state) => state.ui);
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
  const onSetSliderTypeSelection = useCallback(
    () => dispatch(setTypeSelection()),
    [dispatch]
  );
  const onSetSelected = useCallback(
    (value: Personality) => dispatch(setSelected(value)),
    [dispatch]
  );

  return {
    slider,
    selected,
    content,
    isTypeInput,
    onOpenSlider,
    onSetSliderContent,
    onToggleSliderType,
    onSetSliderTypeSelection,
    onSetSelected,
  };
};

export default useSlider;
