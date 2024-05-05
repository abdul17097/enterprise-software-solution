import React, { useState } from "react";
import { MdKeyboardArrowDown, MdOutlineNavigateNext } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import paintAttach from "../assest/paintAttach.png";
import paintRoom from "../assest/paintRoom.png";
import paintWall from "../assest/paintWall.png";
import { setTasks } from "../store/projectSlice";
const Task = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state.task);

  const taskData = [
    {
      title: "Paint Patched Area",
      image: paintAttach,
      description:
        "Select your desired category and service to find the right task you need done!",
    },
    {
      title: "Paint Room",
      image: paintRoom,
      description:
        "Select your desired category and service to find the right task you need done!",
    },
    {
      title: "Paint Wall Section",
      image: paintWall,
      description:
        "Select your desired category and service to find the right task you need done!",
    },
  ];
  return (
    <div className="shadow-custom py-[2rem] px-[3rem] border border-slate-200 rounded-[12px] bg-white flex flex-col gap-[1.5rem]">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={`flex gap-2 items-center disc`}>
          <h2 className="text-[1.5rem] font-semibold">Task</h2>
          <ul
            className={`flex gap-[2rem] list-disc ${
              tasks?.length === 0 ? "hidden" : "pl-8"
            } `}
          >
            {tasks?.map((category) => (
              <li className="text-[1.3rem] font-[400]">{category}</li>
            ))}
          </ul>
          {isOpen ? (
            <MdKeyboardArrowDown className="font-semibold text-[2rem] translate-y-1" />
          ) : (
            <MdOutlineNavigateNext className="font-semibold text-[2rem] translate-y-1" />
          )}
        </div>
        <div className="text-[1rem] font-semibold">{taskData?.length}/4</div>
      </div>
      {isOpen && (
        <div className={`flex flex-wrap gap-[2rem] `}>
          {taskData.map((service, index) => (
            <Card
              key={index}
              title={service.title}
              image={service.image}
              description={service.description}
              action={setTasks}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Task;
