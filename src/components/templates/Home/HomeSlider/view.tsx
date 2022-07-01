import Tag from "components/atom/Tag";
import Slider from "components/modules/Slider";
import React from "react";
import * as S from "./style";

export type HomeSliderProps = {
  isVisible: boolean;
  data: any[];
  onClick: () => void;
};

const HomeSliderView = ({ isVisible, data, onClick }: HomeSliderProps) => {
  return (
    <Slider isVisible={isVisible}>
      <S.Container>
        <S.RowContainer>
          {data && data.map((t) => <Tag title={t.title} onClick={onClick} />)}
        </S.RowContainer>
      </S.Container>
    </Slider>
  );
};

export default HomeSliderView;
