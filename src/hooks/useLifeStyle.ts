import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "store";
import { addLifeStyle, removeLifeStyle } from "store/persona";

const useLifeStyle = () => {
  const dispatch = useDispatch();
  const { lifeStyle } = useSelector((state) => state.persona);

  const onAddLifeStyle = useCallback(
    (value: string) => dispatch(addLifeStyle(value)),
    [dispatch]
  );
  const onRemoveLifeStyle = useCallback(
    (value: string) => dispatch(removeLifeStyle(value)),
    [dispatch]
  );

  return { lifeStyle, onAddLifeStyle, onRemoveLifeStyle };
};

export default useLifeStyle;
