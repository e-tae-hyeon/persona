import React from "react";
import * as S from "./style";

export type BottomSheetProps = {
  isVisible: boolean;
  children: React.ReactNode;
  onBackdrop: () => void;
};

const BottomSheet = ({ isVisible, children, onBackdrop }: BottomSheetProps) => {
  return (
    <>
      <S.Dim isVisible={isVisible} onClick={onBackdrop} />
      <S.Container isVisible={isVisible}>{children}</S.Container>
    </>
  );
};

export default BottomSheet;
