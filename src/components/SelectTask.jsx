import React from "react";
import { useDispatch } from "react-redux";
import { nextStep } from "../store/progressSlice";

const SelectTask = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Task Selection</h2>
      <button onClick={() => dispatch(nextStep())}>Next</button>
    </div>
  );
};

export default SelectTask;
