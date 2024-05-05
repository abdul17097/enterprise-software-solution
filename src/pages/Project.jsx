import React, { useState } from "react";
import SelectTask from "../components/SelectTask";
import Schedule from "../components/Schedule";
import Cart from "../components/Cart";
import Confirm from "../components/Confirm";
import Stepper from "../components/Stepper";

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
      <button onClick={handleNext}>
        {currentStep === stepsConfig.length ? "Finsh" : "Next"}
      </button>
    </div>
  );
};

export default Project;
