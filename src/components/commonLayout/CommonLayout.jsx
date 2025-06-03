import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const CommonLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default CommonLayout;
