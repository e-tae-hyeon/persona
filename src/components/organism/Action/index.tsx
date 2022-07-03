import { ACTION_TEXT_FIELD_PLACEHOLDER } from "commons/constants/string";
import useCharacter from "hooks/useCharacter";
import useForm from "hooks/useForm";
import useJob from "hooks/useJob";
import useLifeStyle from "hooks/useLifeStyle";
import useName from "hooks/useName";
import usePainPoint from "hooks/usePainPoint";
import usePersonality from "hooks/usePersonality";
import useSlider from "hooks/useSlider";
import React from "react";
import ActionView, { ActionProps } from "./view";

const Action = () => {
  const { isTypeInput, content } = useSlider();
  const { onSetName } = useName();
  const { onSetJob } = useJob();
  const { onAddLifeStyle } = useLifeStyle();
  const { onAddCharacter } = useCharacter();
  const { onAddPainPoint } = usePainPoint();
  const { form, onChangeForm } = useForm();
  const { jobData, lifeStyleData, characterData } = usePersonality();

  const props: ActionProps = {
    type: isTypeInput ? "input" : "selection",
    onSubmit: (e) => {
      e.preventDefault();
      switch (content) {
        case "name":
          onSetName(form);
          break;
        case "job":
          onSetJob(form);
          break;

        case "lifeStyle":
          onAddLifeStyle(form);
          break;

        case "character":
          onAddCharacter(form);
          break;
        case "painPoint":
          onAddPainPoint(form);
          break;
      }
    },
    textFieldProps: {
      placeholder: ACTION_TEXT_FIELD_PLACEHOLDER,
      value: form,
      onChange: onChangeForm,
      maxLength: 40,
    },
    selectionProps: {
      contents:
        content === "job"
          ? jobData
          : content === "lifeStyle"
          ? lifeStyleData
          : characterData,
    },
  };
  return <ActionView {...props} />;
};

export default Action;
