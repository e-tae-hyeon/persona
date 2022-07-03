import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "store";
import { changeForm } from "store/ui";

const useForm = () => {
  const dispatch = useDispatch();
  const { form } = useSelector((state) => state.ui);

  const onChangeForm = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) =>
      dispatch(changeForm(e.target.value)),
    [dispatch]
  );
  return { form, onChangeForm };
};

export default useForm;
