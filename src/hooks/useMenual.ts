import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "store";
import { toggleMenual } from "store/ui";

const useMenual = () => {
  const dispatch = useDispatch();
  const { menual } = useSelector((state) => state.ui);

  const onToggleMenual = useCallback(
    () => dispatch(toggleMenual()),
    [dispatch]
  );
  return { menual, onToggleMenual };
};

export default useMenual;
