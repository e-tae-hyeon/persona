import { Female10 } from "components/atom/Image";
import React from "react";
import HomePersonView, { HomePersonProps } from "./view";

const HomePerson = () => {
  const props: HomePersonProps = {
    image: Female10,
    onClick: () => {},
    age: "10대",
    gender: "남자",
  };

  return <HomePersonView {...props} />;
};

export default HomePerson;
