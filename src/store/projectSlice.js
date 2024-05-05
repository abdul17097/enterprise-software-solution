import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobCategories: [],
  services: [],
  tasks: [],
  taskDetails: {
    questions: {
      question1: "",
      question2: "",
      question3: "",
    },
    description: "",
    image: null,
  },
};

const ProjectSlice = createSlice({
  name: "accordain",
  initialState,
  reducers: {
    setJobCategories: (state, action) => {
      if (state.jobCategories.includes(action.payload)) {
        // If category is already selected, remove it
        state.jobCategories = state.jobCategories.filter(
          (cat) => cat !== action.payload
        );
      } else {
        // If category is not selected, add it
        state.jobCategories = [...state.jobCategories, action.payload];
      }
    },
    setServices: (state, action) => {
      if (state.services.includes(action.payload)) {
        // If Services is already selected, remove it
        state.services = state.services.filter((cat) => cat !== action.payload);
      } else {
        // If Services is not selected, add it
        state.services = [...state.services, action.payload];
      }
    },
    setTasks: (state, action) => {
      if (state.tasks.includes(action.payload)) {
        // If Tasks is already selected, remove it
        state.tasks = state.tasks.filter((cat) => cat !== action.payload);
      } else {
        // If Tasks is not selected, add it
        state.tasks = [...state.tasks, action.payload];
      }
    },
    setTaskDetails: (state, action) => {
      state.taskDetails = action.payload;
    },
    setTaskQuestion: (state, action) => {
      const { question, value } = action.payload;
      state.taskDetails.questions[question] = value;
    },
    setTaskDescription: (state, action) => {
      state.taskDetails.description = action.payload;
    },
    setTaskImage: (state, action) => {
      console.log(action.payload);
      state.taskDetails.image = action.payload;
    },
  },
});

export const {
  setJobCategories,
  setServices,
  setTasks,
  setTaskDetails,
  setTaskQuestion,
  setTaskTitle,
  setTaskDescription,
  setTaskImage,
} = ProjectSlice.actions;

export default ProjectSlice.reducer;
