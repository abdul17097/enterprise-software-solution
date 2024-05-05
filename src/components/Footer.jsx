import React from "react";
import { Link } from "react-router-dom";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { TbBrandTwitter } from "react-icons/tb";
import { TbBrandBehance } from "react-icons/tb";
const Footer = () => {
  const links = [
    { url: "", text: "Link" },
    { url: "", text: "Link" },
    { url: "", text: "Link" },
    { url: "", text: "Link" },
    { url: "", text: "Link" },
  ];

  return (
    <footer className="h-[19rem] w-full border-t py-[2rem] flex flex-col justify-between  px-[3rem]">
      <div className="flex justify-end gap-[3.5rem]">
        {links.map(({ url, text }, index) => (
          <Link to={""} className="font-semibold" key={index}>
            {text}
          </Link>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <p className="font-[400] text-sm text-[#807E7E]">© 2023 Fixaroo </p>
        <div className="flex gap-4">
          <SlSocialFacebook className="text-2xl" />
          <SlSocialInstagram className="text-2xl" />
          <TbBrandTwitter className="text-2xl" />
          <TbBrandBehance className="text-2xl" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
