import React from "react";
import HeaderLeft from "./HeaderLeft";
import HeaderMiddle from "./HeaderMiddle";
import HeaderRight from "./HeaderRight";
import Container from "../commonLayout/Container";

const Header = () => {
  return (
    <>
      <Container>
        <div className="flex justify-between items-center mt-[47px] mb-[53px]">
          <HeaderLeft />
          <HeaderMiddle />
          <HeaderRight />
        </div>
      </Container>
    </>
  );
};

export default Header;
