export type UiState = {
  slider: boolean;
  form: string;
  selected: Personality;
};

export type Personality =
  | "image"
  | "name"
  | "job"
  | "lifeStyle"
  | "character"
  | "painPoint"
  | null;
