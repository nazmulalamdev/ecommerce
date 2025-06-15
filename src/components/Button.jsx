import React from "react";
import { IoMdCart } from "react-icons/io";

const Button = ({
  text,
  bg = "#FF624C",
  paddingX = "37px",
  paddingY = "16px",
  border = "none",
  color = "white",
}) => {
  return (
    <button
      style={{
        backgroundColor: bg,
        padding: `${paddingY} ${paddingX}`,
        border,
        color,
        borderRadius: "52px",
        fontFamily: "Montserrat",
        fontWeight: "medium",
        fontSize: "16px",
        cursor: "pointer",
      }}
    >
      <span className="flex items-center gap-2.5">
        <IoMdCart />
        {text}
      </span>
    </button>
  );
};

export default Button;
