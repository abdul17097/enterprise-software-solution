import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentstep: 0,
};

const progressSlice = createSlice({
  name: "progress",
  initialState,
  reducers: {
    nextStep: (state) => {
      state.currentstep += 1;
    },
  },
});

export const { nextStep } = progressSlice.actions;

export default progressSlice.reducer;
