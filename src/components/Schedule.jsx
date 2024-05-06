import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Calendar } from "primereact/calendar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CheckBox from "./CheckBox";
import { setDate, setTime } from "../store/ProjectSlice";
const Schedule = () => {
  const dispatch = useDispatch();
  const { schedule } = useSelector((state) => state.project);
  const morning = [
    { time: "9:30 am" },
    { time: "10:00 am" },
    { time: "10:30 am" },
    { time: "11:00 am" },
    { time: "11:30 am" },
  ];
  const afternoon = [
    { time: "12:00 pm" },
    { time: "12:30 pm" },
    { time: "1:00 pm" },
    { time: "1:30 pm" },
    { time: "2:00 pm" },
    { time: "2:30 pm" },
    { time: "3:00 pm" },
    { time: "3:30 pm" },
    { time: "4:00 pm" },
    { time: "4:30 pm" },
  ];
  const evening = [
    { time: "6:00 pm" },
    { time: "6:30 pm" },
    { time: "7:00 pm" },
    { time: "7:30 pm" },
    { time: "8:00 pm" },
    { time: "8:30 pm" },
    { time: "9:30 pm" },
    { time: "9:30 pm" },
    { time: "10:00 pm" },
    { time: "10:30 pm" },
    { time: "11:00 pm" },
    { time: "11:30 pm" },
  ];

  return (
    <div className="flex flex-col gap-[2.5rem]">
      <h1 className="text-[2rem] font-semibold">Schedule your Task</h1>
      <div className="px-[3rem] border border-[#00000026] shadow-custom py-[2rem] h-[53.5rem] rounded-xl w-full">
        <div className="h-full w-[1,166px] flex gap-[2rem]">
          <div className="h-[30rem] flex-1">
            <h2 className="text-2xl font-bold">Select a day</h2>

            <div className="flex px-[6rem]">
              <DatePicker
                selected={schedule.date}
                onChange={(date) => dispatch(setDate(date.toString()))}
                inline
              />
            </div>
          </div>
          <div className="flex flex-col flex-1 gap-[1rem]">
            <div className="flex flex-col gap-[1rem]">
              <h2 className="text-2xl font-sans font-bold">Select a time</h2>
              <h3 className="text-xl font-sans font-semibold">Morning</h3>
            </div>
            <div className="flex flex-wrap gap-[1rem]">
              {morning.map((hour, index) => (
                <CheckBox key={index} hour={hour.time} />
              ))}
            </div>
            <h3 className="text-xl font-sans font-semibold">Afternoon</h3>
            <div className="flex flex-wrap gap-[1rem]">
              {afternoon.map((hour, index) => (
                <CheckBox key={index} hour={hour.time} />
              ))}
            </div>
            <h3 className="text-xl font-sans font-semibold">Evening</h3>
            <div className="flex flex-wrap gap-[1rem]">
              {evening.map((hour, index) => (
                <CheckBox key={index} hour={hour.time} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
