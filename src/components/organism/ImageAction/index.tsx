import usePerson from "hooks/usePerson";
import React from "react";
import ImageActionView, { ImageActionProps } from "./view";

const ImageAction = () => {
  const { onSetAge, onSetGender } = usePerson();
  const props: ImageActionProps = {
    teenager: {
      onClick: () => onSetAge(10),
    },
    twenties: {
      onClick: () => onSetAge(20),
    },
    thirties: {
      onClick: () => onSetAge(30),
    },
    fourties: {
      onClick: () => onSetAge(40),
    },
    female: {
      onClick: () => onSetGender("Female"),
    },
    male: {
      onClick: () => onSetGender("Male"),
    },
  };

  return <ImageActionView {...props} />;
};

export default ImageAction;
