import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "store";
import { setName } from "store/persona";

const useName = () => {
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.persona);

  const onSetName = useCallback(
    (value: string) => dispatch(setName(value)),
    [dispatch]
  );

  return { name, onSetName };
};

export default useName;
