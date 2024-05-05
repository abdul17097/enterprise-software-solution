import React from "react";
import { useDispatch } from "react-redux";
const Card = ({ image, title, description, action }) => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => dispatch(action(title))}
      className="border border-slate-300 h-[18rem] w-[16rem] rounded-[1rem] flex flex-col gap-[1rem] overflow-hidden cursor-pointer"
    >
      <div className="h-[9.5rem] w-full">
        <img src={image} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="px-[.5rem]">
        <h2 className="text-2xl font-[500]">{title}</h2>
        <p className="">{description}</p>
      </div>
    </div>
  );
};

export default Card;
