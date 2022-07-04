import { MAX_CHARACTER_LIMIT } from "commons/constants/number";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "store";
import { addCharacter, removeCharacter } from "store/persona";

const useCharacter = () => {
  const dispatch = useDispatch();
  const { character } = useSelector((state) => state.persona);

  const onAddCharacter = useCallback(
    (value: string) => {
      if (character.length < MAX_CHARACTER_LIMIT) dispatch(addCharacter(value));
    },
    [dispatch, character]
  );
  const onRemoveCharacter = useCallback(
    (value: string) => dispatch(removeCharacter(value)),
    [dispatch]
  );

  return { character, onAddCharacter, onRemoveCharacter };
};

export default useCharacter;
