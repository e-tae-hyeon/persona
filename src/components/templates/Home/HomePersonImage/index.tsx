import Image, { StaticImageData } from "next/image";
import React from "react";
import * as S from "./style";

export type HomePersonImageProps = {
  image: StaticImageData;
};

const HomePersonImage = ({ image }: HomePersonImageProps) => {
  return (
    <S.Container>
      <Image
        src={image}
        width={10}
        height={10}
        objectFit="contain"
        layout="responsive"
        alt="persona image"
        style={{ borderRadius: "8px" }}
      />
    </S.Container>
  );
};

export default HomePersonImage;
