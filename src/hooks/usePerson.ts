import {
  Female10,
  Female20,
  Female30,
  Female40,
  Male10,
  Male20,
  Male30,
  Male40,
} from "components/atom/Image";
import { StaticImageData } from "next/image";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "store";
import { setAge, setGender } from "store/persona";
import { Age, Gender } from "store/persona/type";

const usePerson = () => {
  const dispatch = useDispatch();
  const { age, gender } = useSelector((state) => state.persona);

  const onSetAge = useCallback(
    (value: Age) => dispatch(setAge(value)),
    [dispatch]
  );
  const onSetGender = useCallback(
    (value: Gender) => dispatch(setGender(value)),
    [dispatch]
  );

  let imageData: StaticImageData = Female10;
  switch (gender + age) {
    case "Female10":
      imageData = Female10;
      break;
    case "Female20":
      imageData = Female20;
      break;
    case "Female30":
      imageData = Female30;
      break;
    case "Female40":
      imageData = Female40;
      break;
    case "Male10":
      imageData = Male10;
      break;
    case "Male20":
      imageData = Male20;
      break;
    case "Male30":
      imageData = Male30;
      break;
    case "Male40":
      imageData = Male40;
      break;
  }
  return { age, gender, imageData, onSetAge, onSetGender };
};

export default usePerson;
