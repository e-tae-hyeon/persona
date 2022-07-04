export type UiState = {
  slider: boolean;
  form: string;
  selected: Personality;
  menual: boolean;
};

export type Personality =
  | "image"
  | "name"
  | "job"
  | "lifeStyle"
  | "character"
  | "painPoint"
  | null;
