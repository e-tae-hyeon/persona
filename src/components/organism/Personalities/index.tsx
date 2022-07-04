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
  const {
    selected,
    onSetSliderContent,
    onOpenSlider,
    onSetSliderTypeSelection,
    onSetSelected,
  } = useSlider();
  const { name } = useName();
  const { job } = useJob();
  const { lifeStyle } = useLifeStyle();
  const { character } = useCharacter();
  const { painPoint } = usePainPoint();

  const props: PersonalitiesProps = {
    name: {
      title: PERSONALITY_NAME_LABEL,
      onClick: () => {
        onSetSelected("name");
        onSetSliderContent("name");
        onSetSliderTypeSelection();
        onOpenSlider();
      },
      content: name,
      isSelected: selected === "name",
    },
    job: {
      title: PERSONALITY_JOB_LABEL,

      onClick: () => {
        onSetSelected("job");
        onSetSliderContent("job");
        onSetSliderTypeSelection();
        onOpenSlider();
      },
      content: job,
      isSelected: selected === "job",
    },
    lifeStyle: {
      title: PERSONALITY_LIFE_STYLE_LABEL,

      onClick: () => {
        onSetSelected("lifeStyle");
        onSetSliderContent("lifeStyle");
        onSetSliderTypeSelection();
        onOpenSlider();
      },
      contents: lifeStyle,
      isSelected: selected === "lifeStyle",
    },
    character: {
      title: PERSONALITY_CHARACTER_LABEL,

      onClick: () => {
        onSetSelected("character");
        onSetSliderContent("character");
        onSetSliderTypeSelection();
        onOpenSlider();
      },
      contents: character,
      isSelected: selected === "character",
    },
    painPoint: {
      title: PERSONALITY_PAIN_POINT_LABEL,

      onClick: () => {
        onSetSelected("painPoint");
        onSetSliderContent("painPoint");
        onSetSliderTypeSelection();
        onOpenSlider();
      },
      contents: painPoint,
      isSelected: selected === "painPoint",
    },
  };

  return <PersonalitiesView {...props} />;
};

export default HomePersonalities;
