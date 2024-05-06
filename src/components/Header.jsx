import React from "react";
import { IoIosArrowDown, IoIosArrowRoundForward } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import logo from "../asset/logo.png";
const Header = () => {
  return (
    <nav className="h-[5.5rem] w-full flex justify-between items-center pr-[1.5rem]">
      <div className="">
        <img src={logo} alt="" className="h-[4rem] w-[4rem]" />
      </div>
      <div className="flex items-center gap-[2.5rem] h-[2.5rem]">
        <div className="flex items-center gap-[3rem]">
          <div className="flex items-center gap-[5px]">
            <span className="">Servieces</span>
            <IoIosArrowDown />
          </div>
          <div className="">
            <span className="">Commercial</span>
          </div>
        </div>
        <div className="flex gap-[1.5rem]">
          <div className="flex items-center gap-[4px]">
            <span className="font-bold text-[16px]">login</span>
            <IoIosArrowRoundForward />
          </div>
          <div className="">
            <button className="bg-[#EBAD1E] font-semibold focus:outline-none px-[2rem] py-[.5rem] rounded-full text-black text-[14px]">
              Book Service
            </button>
          </div>
        </div>
        <div className="text-3xl">
          <MdOutlineShoppingCart />
        </div>
      </div>
    </nav>
  );
};

export default Header;
