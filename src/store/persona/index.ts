import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Age, Gender, PersonaState } from "./type";

const initialState: PersonaState = {
  gender: "Female",
  age: 10,
  name: "",
  job: "",
  lifeStyle: [],
  character: [],
  painPoint: [],
};

const personaSlice = createSlice({
  name: "persona",
  initialState,
  reducers: {
    setGender: (state, action: PayloadAction<Gender>) => {
      state.gender = action.payload;
    },
    setAge: (state, action: PayloadAction<Age>) => {
      state.age = action.payload;
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setJob: (state, action: PayloadAction<string>) => {
      state.job = action.payload;
    },
    addLifeStyle: (state, action: PayloadAction<string>) => {
      if (!state.lifeStyle.includes(action.payload))
        state.lifeStyle.push(action.payload);
    },
    removeLifeStyle: (state, action: PayloadAction<string>) => {
      state.lifeStyle = state.lifeStyle.filter(
        (value) => value !== action.payload
      );
    },
    addCharacter: (state, action: PayloadAction<string>) => {
      if (!state.character.includes(action.payload))
        state.character.push(action.payload);
    },
    removeCharacter: (state, action: PayloadAction<string>) => {
      state.character = state.character.filter(
        (value) => value !== action.payload
      );
    },
    addPainPoint: (state, action: PayloadAction<string>) => {
      if (!state.painPoint.includes(action.payload))
        state.painPoint.push(action.payload);
    },
    removePainPoint: (state, action: PayloadAction<string>) => {
      state.painPoint = state.painPoint.filter(
        (value) => value !== action.payload
      );
    },
  },
});

export const {
  setGender,
  setAge,
  setName,
  setJob,
  addLifeStyle,
  removeLifeStyle,
  addCharacter,
  removeCharacter,
  addPainPoint,
  removePainPoint,
} = personaSlice.actions;
export default personaSlice.reducer;
