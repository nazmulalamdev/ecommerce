import React from "react";
import { FaRegHeart } from "react-icons/fa";

const ProductLayout = () => {
  return (
    <>
      <div>
        <div className="relative pt-[99px] pb-[38px] pl-[52px] pr-[56px] rounded-[15px] shadow-[0px_4px_24px_-1px_rgba(0,0,0,0.08)]">
          <img src="images/product.png" alt="productimg" />
          <div className="flex items-center justify-center rounded-full bg-[#000] text-white w-[49px] h-[49px] absolute top-[28px] right-[30px]">
            <FaRegHeart />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductLayout;
