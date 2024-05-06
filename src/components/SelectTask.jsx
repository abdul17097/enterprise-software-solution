import React from "react";
import { useDispatch } from "react-redux";
import { nextStep } from "../store/progressSlice";
import JobCategory from "./JobCategory";
import Services from "./Services";
import Task from "./Task";
import TaskDetails from "./TaskDetails";

const SelectTask = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-[2.5rem]">
      <div className="">
        <h2 className="text-[2rem] font-semibold">Task Selection</h2>
        <p className="font-[400] text-[1.5rem]">
          Select your desired category and service to find the right task you
          need done
        </p>
      </div>
      <div className="flex flex-col gap-[2.5rem]">
        <JobCategory />
        <Services />
        <Task />
        <TaskDetails />
      </div>
    </div>
  );
};

export default SelectTask;
