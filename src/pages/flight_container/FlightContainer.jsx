import React from "react";
import Hero from "./hero/Hero";

import Category from "./category/Category";
import Offer from "./offer/Offer";
import FlightSearch from "../flight_search/FlightSearch";

const FlightContainer = () => {
  return (
    <>
      <Hero />
      <FlightSearch />
      <Category />
      <Offer />
    </>
  );
};

export default FlightContainer;
