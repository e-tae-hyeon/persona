export type SliderState = {
  content: SliderContent;
  isTypeInput: boolean;
};

export type SliderContent =
  | "image"
  | "name"
  | "job"
  | "lifeStyle"
  | "character"
  | "painPoint";
