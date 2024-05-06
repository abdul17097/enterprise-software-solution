import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./ProjectSlice.js";
export const store = configureStore({
  reducer: {
    project: projectReducer,
  },
});
