import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Personality, UiState } from "./type";

const initialState: UiState = {
  slider: false,
  form: "",
  selected: null,
  menual: false,
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
    resetForm: (state) => {
      state.form = initialState.form;
    },
    setSelected: (state, action: PayloadAction<Personality>) => {
      state.selected = action.payload;
    },
    toggleMenual: (state) => {
      state.menual = !state.menual;
    },
  },
});

export const {
  toggleSlider,
  changeForm,
  resetForm,
  setSelected,
  toggleMenual,
} = uiSlice.actions;
export default uiSlice.reducer;
