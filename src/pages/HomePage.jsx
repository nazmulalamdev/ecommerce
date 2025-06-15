import React from "react";
import Banner from "../components/Banner";
import Faq from "../components/Faq";
import Accessories from "../components/Accessories";
import NewArrival from "../components/NewArrival";

const HomePage = () => {
  return (
    <>
      <Banner />
      <Accessories />
      <NewArrival />
      <Faq />
    </>
  );
};

export default HomePage;
