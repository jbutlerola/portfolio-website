import React from "react";
import HeroListItem from "./HeroListItem";
import { motion } from "framer-motion";

const HeroList = () => {
  // Animation for list variants
  const boxVariants = {
    out: {
      y: 600,
    },
    in: {
      y: 0,
      transition: {
        duration: 0.6,
        // The first child will appear AFTER the parent has appeared on the screen
        delayChildren: 0.5,
        // The next sibling will appear 0.3s after the previous one
        staggerChildren: 0.2,
      },
    },
  };

  const iconVariants = {
    out: {
      x: 1000,
    },
    in: {
      x: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 80,
      }
    },
  };

  return (
    <motion.div variants={boxVariants} initial="out" animate="in">
      <ul className="flex justify-between">
        <motion.div variants={iconVariants}>
          <HeroListItem
            link="https://www.mongodb.com/"
            logo="envira"
          />
        </motion.div>
        <motion.div variants={iconVariants}>
          <HeroListItem
            link="https://expressjs.com/"
            logo="js"
          />
        </motion.div>
        <motion.div variants={iconVariants}>
          <HeroListItem
            link="https://reactjs.org/"
            logo="react"
          />
        </motion.div>
        <motion.div variants={iconVariants}>
          <HeroListItem
            link="https://nodejs.org/en/"
            logo="node-js"
          />
        </motion.div>
      </ul>
    </motion.div>
  );
};

export default HeroList;
