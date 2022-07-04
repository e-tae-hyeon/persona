import { Header, Menual } from "components/organism";
import { HomeBoard, HomeSlider } from "components/templates/Home";
import React, { useRef } from "react";
import exportElementAsPNG from "utils/downloadImage";

const Home = () => {
  const boardRef = useRef<HTMLDivElement>(null);
  const onSave = () => exportElementAsPNG(boardRef.current, "persona");
  return (
    <>
      <Header onSave={onSave} />
      <HomeBoard ref={boardRef} />
      <HomeSlider />
      <Menual />
    </>
  );
};

export default Home;
