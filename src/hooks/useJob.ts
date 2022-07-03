import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "store";
import { setJob } from "store/persona";

const useJob = () => {
  const dispatch = useDispatch();
  const { job } = useSelector((state) => state.persona);

  const onSetJob = useCallback(
    (value: string) => dispatch(setJob(value)),
    [dispatch]
  );
  return { job, onSetJob };
};

export default useJob;
