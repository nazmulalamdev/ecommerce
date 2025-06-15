import React from "react";
import { FaRegHeart, FaStar } from "react-icons/fa";
import Button from "../Button";

const ProductLayout = () => {
  return (
    <>
      <div>
        <div className="relative pt-[99px] pb-[38px] pl-[52px] pr-[56px] rounded-[15px] shadow-[0px_4px_24px_-1px_rgba(0,0,0,0.08)]">
          <img src="images/product.png" alt="productimg" />
          <div className="flex items-center justify-center rounded-full bg-[#000] text-white w-[49px] h-[49px] absolute top-[28px] right-[30px]">
            <FaRegHeart size={21} />
          </div>
        </div>
        <div className="mt-[38px]">
          <div className="flex items-center justify-between font-['Montserrat'] font-extrabold text-[23px] text-[#2C2C2C]">
            <h3>Xiphone 14 Pro Maxe</h3>
            <span>$175.00</span>
          </div>
          <p className="max-w-[410px] mt-[21px] mb-[21px] font-['Montserrat'] font-regular text-lg">
            Lorem ipsum dolor sit amet consectetur. Eleifend nec morbi tellus
            vitae leo nunc.
          </p>
          <div className="flex items-center gap-[2px] text-[#04A904] mb-[23px]">
            <FaStar size={24} />
            <FaStar size={24} />
            <FaStar size={24} />
            <FaStar size={24} />
            <FaStar size={24} />
            <span className="ml-2 text-[#000] font-['Montserrat'] font-regular text-lg">
              (89)
            </span>
          </div>
          <Button
            bg="transprant"
            border="1px solid black"
            text="Add to Cart"
            color="black"
          />
        </div>
      </div>
    </>
  );
};

export default ProductLayout;
