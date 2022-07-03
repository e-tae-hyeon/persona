import {
  PERSONALITY_CHARACTER_LABEL,
  PERSONALITY_JOB_LABEL,
  PERSONALITY_LIFE_STYLE_LABEL,
  PERSONALITY_NAME_LABEL,
  PERSONALITY_PAIN_POINT_LABEL,
} from "commons/constants/string";
import useCharacter from "hooks/useCharacter";
import useJob from "hooks/useJob";
import useLifeStyle from "hooks/useLifeStyle";
import useName from "hooks/useName";
import usePainPoint from "hooks/usePainPoint";
import useSlider from "hooks/useSlider";
import React from "react";
import PersonalitiesView, { PersonalitiesProps } from "./view";

const HomePersonalities = () => {
  const { onSetSliderContent, onOpenSlider } = useSlider();
  const { name } = useName();
  const { job } = useJob();
  const { lifeStyle } = useLifeStyle();
  const { character } = useCharacter();
  const { painPoint } = usePainPoint();

  const props: PersonalitiesProps = {
    name: {
      title: PERSONALITY_NAME_LABEL,
      onClick: () => {
        onOpenSlider();
        onSetSliderContent("name");
      },
      content: name,
    },
    job: {
      title: PERSONALITY_JOB_LABEL,

      onClick: () => {
        onOpenSlider();
        onSetSliderContent("job");
      },
      content: job,
    },
    lifeStyle: {
      title: PERSONALITY_LIFE_STYLE_LABEL,

      onClick: () => {
        onOpenSlider();
        onSetSliderContent("lifeStyle");
      },
      contents: lifeStyle,
    },
    character: {
      title: PERSONALITY_CHARACTER_LABEL,

      onClick: () => {
        onOpenSlider();
        onSetSliderContent("character");
      },
      contents: character,
    },
    painPoint: {
      title: PERSONALITY_PAIN_POINT_LABEL,

      onClick: () => {
        onOpenSlider();
        onSetSliderContent("painPoint");
      },
      contents: painPoint,
    },
  };

  return <PersonalitiesView {...props} />;
};

export default HomePersonalities;
