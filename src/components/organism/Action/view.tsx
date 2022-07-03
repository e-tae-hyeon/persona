import { TextField } from "components/atom";
import { TextFieldProps } from "components/atom/TextField";
import { Feature } from "components/molecule";
import { FeatureProps } from "components/molecule/Feature";
import React from "react";
import * as S from "./style";

export type ActionProps = {
  type: "selection" | "input";
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  textFieldProps: TextFieldProps;
  selectionProps: FeatureProps;
};

const ActionView = ({
  type,
  onSubmit,
  textFieldProps,
  selectionProps,
}: ActionProps) => {
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
