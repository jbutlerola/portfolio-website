import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: "-100%" },
};

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <motion.div
      animate={isOpen ? "open" : "closed"}
      variants={variants}
      className={
        isOpen
          ? "grid grid-rows-3 text-center items-center bg-zorba-200"
          : "hidden"
      }
      onClick={toggle}
    >
      <Link
        className="p-4 cursor-pointer"
        to="about"
        spy={true}
        offset={-40}
        smooth={true}
        duration={500}
      >
        About
      </Link>
      <Link
        className="p-4 cursor-pointer"
        to="portfolio-projects"
        spy={true}
        smooth={true}
        offset={-10}
        duration={500}
      >
        Projects
      </Link>
      <Link
        className="p-4 cursor-pointer"
        to="contact"
        spy={true}
        offset={200}
        smooth={true}
        duration={500}
      >
        Contact
      </Link>
    </motion.div>
  );
};

export default Dropdown;
