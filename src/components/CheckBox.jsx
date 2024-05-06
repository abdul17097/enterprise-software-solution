import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTime } from "../store/ProjectSlice";

const CheckBox = ({ hour }) => {
  const { schedule } = useSelector((state) => state.project);
  const dispatch = useDispatch();
  const handleChange = () => {
    dispatch(setTime(hour));
  };
  return (
    <div
      className={`flex items-center px-[1rem] py-[1rem] border gap-2 rounded-[1rem]`}
    >
      <input
        type="radio"
        className="w-[1.5rem] h-[1.5rem]"
        checked={hour === schedule.time}
        onChange={handleChange}
      />
      <span className="text-[1rem] font-[400]">{hour}</span>
    </div>
  );
};

export default CheckBox;
