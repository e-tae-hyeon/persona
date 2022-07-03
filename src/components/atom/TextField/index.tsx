import React from "react";
import * as S from "./style";

export type TextFieldProps = {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  maxLength: number;
};

const TextField = ({
  placeholder,
  value,
  onChange,
  maxLength,
}: TextFieldProps) => {
  return (
    <S.Input
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      maxLength={maxLength}
    />
  );
};

export default TextField;
