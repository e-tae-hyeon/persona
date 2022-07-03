import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "store";
import { addCharacter, removeCharacter } from "store/persona";

const useCharacter = () => {
  const dispatch = useDispatch();
  const { character } = useSelector((state) => state.persona);

  const onAddCharacter = useCallback(
    (value: string) => dispatch(addCharacter(value)),
    [dispatch]
  );
  const onRemoveCharacter = useCallback(
    (value: string) => dispatch(removeCharacter(value)),
    [dispatch]
  );

  return { character, onAddCharacter, onRemoveCharacter };
};

export default useCharacter;
