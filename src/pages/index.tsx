import theme from "commons/styles/theme";
import { Header, Menual } from "components/organism";
import { HomeBoard, HomeSlider } from "components/templates/Home";
import React from "react";

const Home = () => {
  return (
    <>
      <Header />
      <HomeBoard />
      <HomeSlider />
      <Menual />
    </>
  );
};

export default Home;
