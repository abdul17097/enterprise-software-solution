import { configureStore } from "@reduxjs/toolkit";
import progressReducer from "./progressSlice";
import projectReducer from "./projectSlice";
export const store = configureStore({
  reducer: {
    progress: progressReducer,
    task: projectReducer,
  },
});
