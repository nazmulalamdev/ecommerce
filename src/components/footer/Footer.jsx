import React from "react";
import Container from "../commonLayout/Container";
import { MdCall, MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <Container>
        <div className="flex mt-[73px]">
          <div className="mr-[147px] mt-[5px]">
            <img src="images/logo.png" alt="logo" />
            <p className="max-w-[381px] mt-[57px] font-['Montserrat'] font-normal text-lg">
              Lorem ipsum dolor sit amet consectetur. Eleifend nec morbi tellus
              vitae leo nunc.
            </p>
          </div>
          <div className="mr-[69px]">
            <h4 className="font-['Montserrat'] font-extrabold text-[22px]">
              Company
            </h4>
            <ul className="mt-[13px] flex flex-col gap-[13px] font-['Montserrat'] font-normal text-lg">
              <li>About Us</li>
              <li>Products Digital</li>
              <li>Customer Reviews</li>
            </ul>
          </div>
          <div className="mr-[70px]">
            <h4 className="font-['Montserrat'] font-extrabold text-[22px]">
              Information
            </h4>
            <ul className="mt-[13px] flex flex-col gap-[13px] font-['Montserrat'] font-normal text-lg">
              <li>Help Center</li>
              <li>Payment Methods</li>
              <li>Return & Refund</li>
            </ul>
          </div>
          <div>
            <h4 className="font-['Montserrat'] font-extrabold text-[22px]">
              Contact
            </h4>
            <ul className="mt-[13px] flex flex-col gap-[13px] font-['Montserrat'] font-normal text-lg">
              <li className="flex items-center gap-1">
                <MdCall /> (+1) 123-456-7890
              </li>
              <li className="flex items-center gap-1">
                <MdEmail /> email@youremail.com
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Footer;
