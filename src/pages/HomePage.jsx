import React from "react";
import Banner from "../components/Banner";
import Faq from "../components/Faq";
import Accessories from "../components/Accessories";
import Button from "../components/Button";
import NewArrival from "../components/NewArrival";

const HomePage = () => {
  return (
    <>
      <Banner />
      <Accessories />
      <NewArrival />
      <Faq />
      <Button
        bg="transprant"
        border="1px solid black"
        text="Add to Cart"
        color="black"
      />
    </>
  );
};

export default HomePage;
