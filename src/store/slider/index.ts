import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SliderContent, SliderState } from "./type";

const initialState: SliderState = {
  content: "image",
  isTypeInput: false,
};

const sliderSlice = createSlice({
  name: "slider",
  initialState,
  reducers: {
    setSlider: (state, action: PayloadAction<SliderContent>) => {
      state.content = action.payload;
    },
    toggleType: (state) => {
      state.isTypeInput = !state.isTypeInput;
    },
    setTypeSelection: (state) => {
      state.isTypeInput = false;
    },
  },
});

export const { setSlider, toggleType, setTypeSelection } = sliderSlice.actions;
export default sliderSlice.reducer;
