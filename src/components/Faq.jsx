import React from "react";
import Container from "./commonLayout/Container";
import { FiSearch } from "react-icons/fi";

const Faq = () => {
  return (
    <>
      <Container>
        <div className="flex items-center bg-[#212736] rounded-[20px] py-[62px] pl-[73px] mt-[105px] gap-[49px]">
          <div>
            <h3 className="max-w-[473px] font-['Prompt'] font-bold text-[46px] text-white mb-[17px]">
              Gateway to a world of innovation with
            </h3>
            <img src="images/logowhite.png" alt="logo" />
          </div>
          <div>
            <div className="relative w-[591px]">
              <FiSearch size={20} className="absolute top-[32px] ml-[35px]" />
              <input
                className="w-full bg-[#EFF0F1] pt-[34px] px-[86px] pb-[83px] rounded-[10px] font-['Montserrat'] font-normal text-sm"
                type="text"
                placeholder="Search for electronic"
              />
              <button className="bg-[#ACE238] rounded-[14px] py-[13px] px-[243px] absolute left-1/2 -translate-x-1/2 mt-[75px]">
                Search
              </button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Faq;
