import { Header } from "components/organism";
import { HomeBoard, HomeSlider } from "components/templates/Home";
import React from "react";

const Home = () => {
  return (
    <>
      <Header />
      <HomeBoard />
      <HomeSlider />
    </>
  );
};

export default Home;
