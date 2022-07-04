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
    // <S.Container>
    <>
      <S.PersonInfo>
        <Personality {...name} />
        <Personality {...job} />
      </S.PersonInfo>
      <S.Container>
        <Personality {...lifeStyle} />
        <Personality {...character} />
        <Personality {...painPoint} />
      </S.Container>
    </>
    // </S.Container>
  );
};

export default PersonalitiesView;
