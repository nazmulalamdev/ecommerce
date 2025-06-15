import React from "react";
import Container from "./commonLayout/Container";
import ProductLayout from "./commonLayout/ProductLayout";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const NewArrival = () => {
  return (
    <Container>
      <div className="pt-[106px]">
        <div className="flex items-center justify-between">
          <h3 className="font-['Prompt'] font-bold text-[47px]">
            New <span className="text-[#5E1EE5]">arrival</span> for you
          </h3>
          <ul className="flex gap-6">
            <li className="w-[55px] h-[55px] rounded-full flex items-center justify-center border hover:border-0 hover:bg-[#AFE638] cursor-pointer">
              <FaArrowLeft size={24} />
            </li>
            <li className="w-[55px] h-[55px] rounded-full flex items-center justify-center border hover:border-0 hover:bg-[#AFE638] cursor-pointer">
              <FaArrowRight size={24} />
            </li>
          </ul>
        </div>

        <div className="flex justify-between mt-[46px]">
          <div className="relative after:absolute after:content-[''] after:w-[2px] after:h-[308px] after:bg-[#E2E2E2] after:rounded after:left-0 after:top-0">
            <ul className="ml-6 flex flex-col gap-10 font-['Montserrat'] font-medium text-base text-[#2C2C2C]">
              <li className="mt-[17px]">
                Computer & Laptop{" "}
                <span className="w-[40px] h-[31px] bg-[#1F2537] py-[6px] px-3 text-[#EDEDEF] rounded-[8px] ml-[18px] font-['Montserrat'] font-bold text-[15px]">
                  15
                </span>
              </li>
              <li>
                Mobile & Phone{" "}
                <span className="w-[40px] h-[31px] bg-[#AFE638] py-[6px] px-3 rounded-[8px] ml-[18px] font-['Montserrat'] font-bold text-[15px] text-[#1F2537]">
                  35
                </span>
              </li>
              <li>
                Camera Imaging{" "}
                <span className="w-[40px] h-[31px] bg-[#5E1EE5] py-[6px] px-3 rounded-[8px] ml-[18px] font-['Montserrat'] font-bold text-[15px] text-[#FFF]">
                  10
                </span>
              </li>
              <li>
                TV & Smart Box{" "}
                <span className="w-[40px] h-[31px] bg-[#F1F1F2] py-[6px] px-3 rounded-[8px] ml-[18px] font-['Montserrat'] font-bold text-[15px] text-[#1F2537]">
                  8
                </span>
              </li>
              <li>
                Home Appliance{" "}
                <span className="w-[40px] h-[31px] bg-[#FFE921] py-[6px] px-3 rounded-[8px] ml-[18px] font-['Montserrat'] font-bold text-[15px] text-[#000]">
                  2
                </span>
              </li>
            </ul>
          </div>
          <div className="flex gap-[98px]">
            <ProductLayout />
            <ProductLayout />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default NewArrival;
