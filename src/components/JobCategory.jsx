import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { setJobCategories } from "../store/ProjectSlice";

import { MdOutlineNavigateNext, MdKeyboardArrowDown } from "react-icons/md";
const JobCategory = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { jobCategories } = useSelector((state) => state.project);

  const categories = [
    {
      id: 1,
      name: "Drywall & Paint",
    },
    {
      id: 2,
      name: "Doors, Knobs, Handles",
    },
    {
      id: 3,
      name: "Clogs, Leaks & Fixtures",
    },
    {
      id: 4,
      name: "Caulking",
    },
    {
      id: 5,
      name: "TV & Furniture Mounting",
    },
    {
      id: 6,
      name: "Furniture Assembly",
    },
    {
      id: 7,
      name: "Vent Cleaning",
    },
    {
      id: 8,
      name: "Other Categories",
    },
  ];
  return (
    <div className="shadow-custom py-[2rem] px-[3rem] border border-slate-200 rounded-[12px] bg-white flex flex-col gap-[1.5rem]">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={`flex gap-2 items-center disc`}>
          <h2 className="text-[1.5rem] font-semibold">Job Category</h2>
          <ul
            className={`flex gap-[2rem] list-disc ${
              jobCategories?.length === 0 ? "hidden" : "pl-8"
            } `}
          >
            {jobCategories?.map((category, index) => (
              <li key={index} className="text-[1.3rem] font-[400]">
                {category}
              </li>
            ))}
          </ul>
          {isOpen ? (
            <MdKeyboardArrowDown className="font-semibold text-[2rem] translate-y-1" />
          ) : (
            <MdOutlineNavigateNext className="font-semibold text-[2rem] translate-y-1" />
          )}
        </div>
        <div className="text-[1rem] font-semibold">{categories?.length}/8</div>
      </div>
      {isOpen && (
        <>
          <div className={`flex flex-wrap gap-[.5rem] `}>
            {categories?.map((item, index) => (
              <div
                key={index}
                className={`flex w-fit items-center px-[1.5rem] py-[1rem] gap-[1rem] rounded-[1rem] border border-slate-200 cursor-pointer ${
                  jobCategories?.includes(item.name) && "bg-black text-white"
                } `}
                onClick={() => dispatch(setJobCategories(item.name))}
              >
                <span className="w-[1.5rem] h-[1.5rem]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.1742 3.26986C11.4491 2.94003 11.9363 2.91254 12.2466 3.1874L12.3265 3.26986L17.1017 9H20.7504C21.2383 9 21.5963 9.45854 21.478 9.9319L19.4906 17.8707C19.2415 19.3976 18.1048 20.5344 16.7504 20.5L6.59889 20.498C5.30281 20.4391 4.24938 19.3366 4.02276 17.9319L2.02276 9.9319C1.90442 9.45854 2.26244 9 2.75037 9H6.39909L11.1742 3.26986ZM16.7561 10.5H16.7454H6.75526H6.74467H3.71037L5.49059 17.6293C5.61828 18.4121 6.10269 18.9402 6.63556 18.9955L6.75037 19L16.7693 19.0002C17.327 19.0143 17.8733 18.468 18.0228 17.5681L19.7894 10.5H16.7561ZM11.7504 4.922L15.149 9H8.35174L11.7504 4.922ZM11.7504 12C10.2316 12 9.00037 13.2312 9.00037 14.75C9.00037 16.2688 10.2316 17.5 11.7504 17.5C13.2692 17.5 14.5004 16.2688 14.5004 14.75C14.5004 13.2312 13.2692 12 11.7504 12ZM11.7504 13.5C12.4407 13.5 13.0004 14.0596 13.0004 14.75C13.0004 15.4404 12.4407 16 11.7504 16C11.06 16 10.5004 15.4404 10.5004 14.75C10.5004 14.0596 11.06 13.5 11.7504 13.5Z"
                      fill={
                        jobCategories.includes(item.name) ? "#fff" : "black"
                      }
                    />
                  </svg>
                </span>
                <p className="text-xl font-[500]">{item.name}</p>
              </div>
            ))}
          </div>
          {jobCategories.length === 0 && (
            <div className="flex gap-2 font-[400] text-2xl font-roboto">
              <p className="">Need HVAC or Water filtration services?</p>
              <span className="underline font-semibold">
                Call to request Home Advisor
              </span>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default JobCategory;
