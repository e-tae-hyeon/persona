import { MAX_PAIN_POINT_LIMIT } from "commons/constants/number";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "store";
import { addPainPoint, removePainPoint } from "store/persona";

const usePainPoint = () => {
  const dispatch = useDispatch();
  const { painPoint } = useSelector((state) => state.persona);

  const onAddPainPoint = useCallback(
    (value: string) => {
      if (painPoint.length < MAX_PAIN_POINT_LIMIT)
        dispatch(addPainPoint(value));
    },
    [dispatch, painPoint]
  );
  const onRemovePainPoint = useCallback(
    (value: string) => dispatch(removePainPoint(value)),
    [dispatch]
  );

  return { painPoint, onAddPainPoint, onRemovePainPoint };
};

export default usePainPoint;
