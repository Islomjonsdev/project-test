import React from "react";
import Aboutus from "../Aboutus/Aboutus";
import Hero from "../Hero/Hero";
import Persentage from "../Persentage/Persentage";
import Service from "../Service/Service";
import Solutions from "../Solutions/Solutions";

const Home = () => {
  return (
    <div>
      <Hero />
      <Persentage />
      <Aboutus />
      <Service />
      <Solutions />
    </div>
  );
};

export default Home;
