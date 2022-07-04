import { TextField } from "components/atom";
import { TextFieldProps } from "components/atom/TextField";
import { Feature } from "components/molecule";
import { FeatureProps } from "components/molecule/Feature";
import React from "react";
import { SliderContent } from "store/slider/type";
import * as S from "./style";

export type ActionProps = {
  content: SliderContent;
  type: "selection" | "input";
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  textFieldProps: TextFieldProps;
  selectionProps: FeatureProps;
};

const ActionView = ({
  content,
  type,
  onSubmit,
  textFieldProps,
  selectionProps,
}: ActionProps) => {
  if (content === "name" || content === "painPoint")
    return (
      <S.Container>
        <S.Form onSubmit={onSubmit}>
          <TextField {...textFieldProps} />
        </S.Form>
      </S.Container>
    );
  return (
    <S.Container>
      {type === "input" ? (
        <S.Form onSubmit={onSubmit}>
          <TextField {...textFieldProps} />
        </S.Form>
      ) : (
        <Feature {...selectionProps} />
      )}
    </S.Container>
  );
};

export default ActionView;
