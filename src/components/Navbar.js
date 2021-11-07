import React from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <nav
      className="flex justify-between items-center h-16 bg-transparent text-black font-mono sticky top-0"
      role="navigation"
    >
      <Link
        className="pl-8 cursor-pointer"
        to="about"
        spy={true}
        smooth={true}
        duration={500}
      >
        Jack Butler
      </Link>
      <div className="px-4 cursor-pointer md:hidden">
        <FontAwesomeIcon icon="bars" />
      </div>
      <div className="pr-8 md:block hidden">
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
      </div>
    </nav>
  );
};

export default Navbar;
