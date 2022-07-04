import usePerson from "hooks/usePerson";
import useSlider from "hooks/useSlider";
import React from "react";
import PersonView, { PersonProps } from "./view";

const Person = () => {
  const { imageData, age, gender } = usePerson();
  const { selected, onOpenSlider, onSetSliderContent, onSetSelected } =
    useSlider();
  const props: PersonProps = {
    image: imageData,
    onClick: () => {
      onSetSelected("image");
      onSetSliderContent("image");
      onOpenSlider();
    },
    age: `${age}'s`,
    gender,
    isSelected: selected === "image",
  };

  return <PersonView {...props} />;
};

export default Person;
