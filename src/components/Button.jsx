import React from "react";

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
      {text}
    </button>
  );
};

export default Button;
