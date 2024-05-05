import React from "react";
import { useSelector } from "react-redux";

const CheckBox = ({ hour, selectedTime, setSelectedTime }) => {
  const { time } = useSelector((state) => state.task);
  const handleChange = () => {
    setSelectedTime(hour === selectedTime ? null : hour);
  };
  return (
    <div
      className={`flex items-center px-[1rem] py-[1rem] border gap-2 rounded-[1rem]`}
    >
      <input
        type="radio"
        className="w-[1.5rem] h-[1.5rem]"
        checked={hour === selectedTime}
        onChange={handleChange}
      />
      <span className="text-[1rem] font-[400]">{hour}</span>
    </div>
  );
};

export default CheckBox;
