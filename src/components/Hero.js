import React from "react";
import HeroList from "./HeroList";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="lg:text-5xl md:text-3xl sm:text- text-2xl mb-10">
        <motion.div
          initial={{ y: 200 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', delay: 0.2, mass: 1, damping: 8, stiffness: 80 }}
        >
          I'm a web developer who specializes in React
        </motion.div>
      </h1>
      <HeroList />
    </div>
  );
};

export default Hero;
