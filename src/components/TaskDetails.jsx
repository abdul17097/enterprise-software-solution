import React, { useRef, useState } from "react";
import { MdKeyboardArrowDown, MdOutlineNavigateNext } from "react-icons/md";
import { RiFileCopyLine } from "react-icons/ri";
import Question from "./Question";
import { useDispatch, useSelector } from "react-redux";
import {
  setTaskDescription,
  setTaskImage,
  setTaskQuestion,
} from "../store/projectSlice";

const TaskDetails = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { questions, description, image } = useSelector(
    (state) => state.task.taskDetails
  );

  const imagRef = useRef();
  const handleOptionChange = (question, value) => {
    dispatch(setTaskQuestion({ question, value }));
  };

  const handleImage = (e) => {
    const { name } = e.target.files[0];
    dispatch(setTaskImage(name));
  };
  const handleNote = (e) => {
    dispatch(setTaskDescription(e.target.value));
  };
  return (
    <div className="shadow-custom py-[2rem] px-[3rem] border border-slate-200 rounded-[12px] bg-white flex flex-col gap-[1.5rem]">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={`flex gap-2 items-center disc`}>
          <h2 className="text-[1.5rem] font-semibold">Task Details</h2>
          {isOpen ? (
            <MdKeyboardArrowDown className="font-semibold text-[2rem] translate-y-1" />
          ) : (
            <MdOutlineNavigateNext className="font-semibold text-[2rem] translate-y-1" />
          )}
        </div>
        <div className="text-[1rem] font-semibold">4/4</div>
      </div>
      {isOpen && (
        <div className={`flex flex-col flex-wrap gap-[2rem] `}>
          <div className="flex gap-[1.5rem] flex-col">
            <Question
              selectedOption={questions.question1}
              text="Question 1:"
              handleOptionChange={(value) =>
                handleOptionChange("question1", value)
              }
            />
            <Question
              selectedOption={questions.question2}
              text="Question 2:"
              handleOptionChange={(value) =>
                handleOptionChange("question2", value)
              }
            />
            <Question
              selectedOption={questions.question3}
              text="Question 3:"
              handleOptionChange={(value) =>
                handleOptionChange("question3", value)
              }
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-[1rem] font-semibold">
              Note:
            </label>
            <textarea
              onChange={handleNote}
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Describe the problem, the size, dimensions etc"
              className="focus:outline-none border border-[#C4C4C4] resize-none rounded-[3px] h-36 px-[1rem] py-[1rem]"
            ></textarea>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-[1rem] font-semibold">
              Attach an image:
            </label>
            <div
              onClick={() => imagRef.current.click()}
              className="bg-[#FAFAFB] flex flex-col gap-[1rem] justify-center items-center h-[14.5rem] border border-dashed border-[#C4C4C4] rounded-xl cursor-pointer"
            >
              <input
                type="file"
                ref={imagRef}
                onChange={(e) => handleImage(e)}
                className="hidden"
              />
              <RiFileCopyLine className="text-4xl" />
              <p className="text-[1.5rem] font-[400]">Drap and Drop Images</p>
              <p className="underline font-[400] text-sm">or Browse</p>
            </div>
          </div>
          <div className="">
            <label htmlFor="" className="text-[1.5rem] font-[500]">
              Pirce:
            </label>
            <p className="text-[1.5rem] font-[400]">N/A</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskDetails;
