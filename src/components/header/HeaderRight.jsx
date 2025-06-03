import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Container from "../commonLayout/Container";

const HeaderRight = () => {
  return (
    <>
      <div className="flex items-center gap-10">
        <Link className="font-['Montserrat'] font-semibold text-[#8E8E8E] text-[13px] uppercase">
          LOGIN
        </Link>
        <button className="text-white py-4 px-[37px] rounded-[52px] bg-[#000] flex items-center gap-[10px] font-['Montserrat'] font-medium text-base cursor-pointer">
          Sign Up Now <FaArrowRight size={18} />
        </button>
      </div>
    </>
  );
};

export default HeaderRight;
