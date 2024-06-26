import React, { useState } from "react";
import { MdKeyboardArrowDown, MdOutlineNavigateNext } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import paint from "../asset/paint.png";
import drywall from "../asset/drywall.jpg";
import { setServices } from "../store/ProjectSlice";
const Services = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { services } = useSelector((state) => state.project);

  const servicesData = [
    {
      title: "Painting",
      image: paint,
      description:
        "Select your desired category and service to find the right task you need done!",
    },
    {
      title: "Dry wall repair",
      image: drywall,
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
          <h2 className="text-[1.5rem] font-semibold">Services</h2>
          <ul
            className={`flex gap-[2rem] list-disc ${
              services?.length === 0 ? "hidden" : "pl-8"
            } `}
          >
            {services?.map((category, index) => (
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
        <div className="text-[1rem] font-semibold">
          {servicesData?.length}/4
        </div>
      </div>
      {isOpen && (
        <div className={`flex flex-wrap gap-[2rem] `}>
          {servicesData.map((service, index) => (
            <Card
              key={service.title}
              title={service.title}
              image={service.image}
              description={service.description}
              action={setServices}
              active={servicesData.includes(service.title)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Services;
