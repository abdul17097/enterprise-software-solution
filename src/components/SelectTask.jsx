import React from "react";
import JobCategory from "./JobCategory";
import Services from "./Services";
import Task from "./Task";
import TaskDetails from "./TaskDetails";
const SelectTask = () => {
  return (
    <div className="flex flex-col gap-[2.5rem]">
      <div className="">
        <h1 className="text-[2rem] font-semibold">Task Selection</h1>
        <p className="text-[1.5rem]">
          Select your desired category and service to find the right task you
          need done!
        </p>
      </div>
      <div className="w-full flex flex-col gap-10">
        <JobCategory />
        <Services />
        <Task />
        <TaskDetails />
      </div>
    </div>
  );
};

export default SelectTask;
