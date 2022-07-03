import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UiState } from "./type";

const initialState: UiState = {
  slider: false,
  form: "",
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
  },
});

export const { toggleSlider, changeForm } = uiSlice.actions;
export default uiSlice.reducer;
