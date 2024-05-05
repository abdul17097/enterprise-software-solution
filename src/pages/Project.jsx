import React, { useState } from "react";
import SelectTask from "../components/SelectTask";
import Schedule from "../components/Schedule";
import Cart from "../components/Cart";
import Confirm from "../components/Confirm";
import Stepper from "../components/Stepper";
import { IoIosArrowRoundForward } from "react-icons/io";
const Project = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);

  const stepsConfig = [
    {
      name: "Select Task",
      component: <SelectTask />,
    },
    {
      name: "Schedule",
      component: <Schedule />,
    },
    {
      name: "Cart",
      component: <Cart />,
    },
    {
      name: "Confirm",
      component: <Confirm />,
    },
  ];

  const handleNext = () => {
    setCurrentStep((prvStep) => {
      if (prvStep === stepsConfig.length) {
        setIsComplete(true);
        return prvStep;
      } else {
        return prvStep + 1;
      }
    });
  };

  return (
    <div className="flex flex-col gap-[2.5rem]">
      <Stepper
        currentStep={currentStep}
        stepsConfig={stepsConfig}
        isComplete={isComplete}
      />
      <div className="">{stepsConfig[currentStep - 1].component}</div>
      <div className="w-full py-[1rem] px-[1.5rem] flex flex-col justify-center items-center gap-[2rem]">
        <button
          onClick={handleNext}
          className="py-[1.5rem] px-[2.5rem] border rounded-[2.5rem] text-[1.5rem] font-[400] bg-[#0F1337] text-[#FFFF]"
        >
          {currentStep === stepsConfig.length
            ? "Finsh"
            : `Continue to ${stepsConfig[currentStep - 1].name}`}
        </button>
        <div className="flex items-center gap-1 cursor-pointer">
          <p className="font-bold text-lg">Save for later</p>
          <IoIosArrowRoundForward />
        </div>
      </div>
    </div>
  );
};

export default Project;
