import React, { useEffect, useRef, useState } from "react";
import { IoCheckmarkOutline } from "react-icons/io5";

const Stepper = ({ currentStep, stepsConfig, isComplete }) => {
  const [margins, setMargins] = useState({
    marginLeft: 0,
    marginRight: 0,
  });
  const stepRef = useRef([]);
  useEffect(() => {
    setMargins({
      marginLeft: stepRef.current[0].offsetWidth / 2 + 10,
      marginRight: stepRef.current[currentStep - 1].offsetWidth / 2,
    });
  }, [useRef.current]);
  const calculateProgressBarWidth = () => {
    return ((currentStep - 1) / (stepsConfig.length - 1)) * 100;
  };
  return (
    <div className="h-[9rem] w-full flex flex-col items-center justify-between">
      <h1 className="text-[1.5rem] font-semibold">Project Progress</h1>
      <div className="flex stepper">
        {stepsConfig.map((step, index) => (
          <div
            className={`step`}
            key={step.name}
            ref={(el) => (stepRef.current[index] = el)}
          >
            <div
              className={`step-symbol border border-black  ${
                currentStep > index + 1 || isComplete
                  ? "complete border-none"
                  : ""
              } ${currentStep === index + 1 ? "active border-none" : ""}`}
            >
              {(currentStep > index + 1 || isComplete) && (
                <IoCheckmarkOutline className="text-white" />
              )}
            </div>
            <div className="step-name">{step.name}</div>
          </div>
        ))}
        <div
          className="progress-bar"
          style={{
            width: `calc(100% - ${margins.marginLeft + margins.marginRight}px)`,
            marginLeft: `${margins.marginLeft}px`,
            marginRight: `${margins.marginRight}px`,
          }}
        >
          <div
            className="progress"
            style={{ width: `${calculateProgressBarWidth()}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Stepper;
