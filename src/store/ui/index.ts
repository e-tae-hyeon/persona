import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Personality, UiState } from "./type";

const initialState: UiState = {
  slider: false,
  form: "",
  selected: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleSlider: (state) => {
      state.slider = !state.slider;
    },
    changeForm: (state, action: PayloadAction<string>) => {
      state.form = action.payload;
    },
    setSelected: (state, action: PayloadAction<Personality>) => {
      if (state.selected === action.payload) state.selected = null;
      else {
        state.selected = action.payload;
      }
    },
  },
});

export const { toggleSlider, changeForm, setSelected } = uiSlice.actions;
export default uiSlice.reducer;
