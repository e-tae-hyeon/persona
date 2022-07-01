import Layout from "components/atom/Layout";
import React from "react";
import HomePerson from "../HomePerson";
import HomePersonalities from "../HomePersonalities";
import HomeSlider from "../HomeSlider";

import * as S from "./style";

const HomeBoardView = () => {
  return (
    <Layout>
      <S.Container>
        <HomePerson />
        <HomePersonalities />
        <HomeSlider />
      </S.Container>
    </Layout>
  );
};

export default HomeBoardView;
