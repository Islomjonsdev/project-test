import React from "react";
import Aboutus from "../Aboutus/Aboutus";
import Hero from "../Hero/Hero";
import Persentage from "../Persentage/Persentage";
import Service from "../Service/Service";

const Home = () => {
  return (
    <div>
      <Hero />
      <Persentage />
      <Aboutus />
      <Service />
    </div>
  );
};

export default Home;
