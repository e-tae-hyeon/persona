import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "store";
import { addPainPoint, removePainPoint } from "store/persona";

const usePainPoint = () => {
  const dispatch = useDispatch();
  const { painPoint } = useSelector((state) => state.persona);

  const onAddPainPoint = useCallback(
    (value: string) => dispatch(addPainPoint(value)),
    [dispatch]
  );
  const onRemovePainPoint = useCallback(
    (value: string) => dispatch(removePainPoint(value)),
    [dispatch]
  );

  return { painPoint, onAddPainPoint, onRemovePainPoint };
};

export default usePainPoint;
