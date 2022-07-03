import React from "react";
import * as S from "./style";

export type BottomSheetProps = {
  isVisible: boolean;
  children: React.ReactNode;
};

const BottomSheet = ({ isVisible, children }: BottomSheetProps) => {
  return <S.Container isVisible={isVisible}>{children}</S.Container>;
};

export default BottomSheet;
