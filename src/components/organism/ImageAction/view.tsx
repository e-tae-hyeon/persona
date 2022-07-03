import {
  IMAGE_FEMALE,
  IMAGE_FOURTIES,
  IMAGE_MALE,
  IMAGE_TEENAGER,
  IMAGE_THIRTIES,
  IMAGE_TWENTIES,
} from "commons/constants/string";
import { Button } from "components/atom";
import { ButtonProps } from "components/atom/Button";
import React from "react";
import * as S from "./style";

export type ImageActionProps = {
  teenager: ButtonProps;
  twenties: ButtonProps;
  thirties: ButtonProps;
  fourties: ButtonProps;
  female: ButtonProps;
  male: ButtonProps;
};

const ImageActionView = ({
  teenager,
  twenties,
  thirties,
  fourties,
  female,
  male,
}: ImageActionProps) => {
  return (
    <S.Container>
      <Button {...teenager} theme="secondary">
        {IMAGE_TEENAGER}
      </Button>
      <Button {...twenties} theme="secondary">
        {IMAGE_TWENTIES}
      </Button>
      <Button {...thirties} theme="secondary">
        {IMAGE_THIRTIES}
      </Button>
      <Button {...fourties} theme="secondary">
        {IMAGE_FOURTIES}
      </Button>
      <S.GenderContainer>
        <Button {...female} theme="secondary">
          {IMAGE_FEMALE}
        </Button>
        <Button {...male} theme="secondary">
          {IMAGE_MALE}
        </Button>
      </S.GenderContainer>
    </S.Container>
  );
};

export default ImageActionView;
