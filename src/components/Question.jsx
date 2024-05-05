import React from "react";

const Question = ({ text, handleOptionChange, selectedOption }) => {
  return (
    <div className="flex gap-[1rem] items-center">
      <p htmlFor="" className="text-[1.5rem] font-[500]">
        {text}
      </p>
      <label
        htmlFor=""
        className={`flex items-center px-[1.5rem] py-[1rem] border rounded-[.5rem] ${
          selectedOption === "yes" ? "bg-gray-200" : ""
        }`}
      >
        <input
          type="radio"
          className="w-[1.5rem] h-[1.5rem]"
          value="yes"
          checked={selectedOption === "yes"}
          onChange={() => handleOptionChange("yes")}
        />
        <span className="text-[1.5rem] font-[400] ml-[1rem]">Yes</span>
      </label>
      <label
        htmlFor=""
        className={`flex items-center px-[1.5rem] py-[1rem] border rounded-[.5rem] ${
          selectedOption === "no" ? "bg-gray-200" : ""
        }`}
      >
        <input
          type="radio"
          className="w-[1.5rem] h-[1.5rem]"
          value="no"
          checked={selectedOption === "no"}
          onChange={() => handleOptionChange("no")}
        />
        <span className="text-[1.5rem] font-[400] ml-[1rem]">No</span>
      </label>
    </div>
  );
};

export default Question;
