import usePerson from "hooks/usePerson";
import useSlider from "hooks/useSlider";
import React from "react";
import PersonView, { PersonProps } from "./view";

const Person = () => {
  const { imageData, age, gender } = usePerson();
  const { onOpenSlider, onSetSliderContent } = useSlider();
  const props: PersonProps = {
    image: imageData,
    onClick: () => {
      onSetSliderContent("image");
      onOpenSlider();
    },
    age: `${age}대`,
    gender,
  };

  return <PersonView {...props} />;
};

export default Person;
