import React from "react";
import { Link } from "react-router-dom";
import Container from "../commonLayout/Container";

const HeaderMiddle = () => {
  return (
    <>
      <div>
        <ul className="flex items-center gap-[57px] font-['Montserrat'] font-semibold text-[#8E8E8E] text-[13px] uppercase">
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>Pricing</Link>
          </li>
          <li>
            <Link>Events</Link>
          </li>
          <li>
            <Link>Company</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HeaderMiddle;
