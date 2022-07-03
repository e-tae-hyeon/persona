import { Personality } from "components/molecule";
import { PersonalityProps } from "components/molecule/Personality";
import React from "react";
import * as S from "./style";

export type PersonalitiesProps = {
  name: PersonalityProps;
  job: PersonalityProps;
  lifeStyle: PersonalityProps;
  character: PersonalityProps;
  painPoint: PersonalityProps;
};

const PersonalitiesView = ({
  name,
  job,
  lifeStyle,
  character,
  painPoint,
}: PersonalitiesProps) => {
  return (
    <S.Container>
      <Personality {...name} />
      <Personality {...job} />
      <Personality {...lifeStyle} />
      <Personality {...character} />
      <Personality {...painPoint} />
    </S.Container>
  );
};

export default PersonalitiesView;
