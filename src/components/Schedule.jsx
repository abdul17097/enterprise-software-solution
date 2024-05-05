import React from "react";
import { useDispatch } from "react-redux";

const Schedule = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-[2.5rem]">
      <div className="">
        <h1 className="text-[2rem] font-semibold">Schedule your Task</h1>
      </div>
    </div>
  );
};

export default Schedule;
