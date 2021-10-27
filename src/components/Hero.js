import React from "react";
import { Link } from "react-router-dom";
import HeroList from "./HeroList";

const Hero = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="lg:text-5xl md:text-3xl sm:text- text-2xl mb-10">
        I'm a web developer who specializes in React
      </h1>
      <HeroList />
    </div>
  );
};

export default Hero;
