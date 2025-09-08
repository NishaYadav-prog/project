import React from "react";
import Hero from "./hero/Hero";
import TrainSearch from "../train_search/TrainSearch";
import Category from "./category/Category";
import Offer from "./offer/Offer";

const TrainContainer = () => {
  return (
    <>
      <Hero />
      <TrainSearch />
      <Category />
      <Offer />
    </>
  );
};

export default TrainContainer;
