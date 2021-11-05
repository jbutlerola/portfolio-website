import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <nav
      className="flex justify-between items-center h-16 bg-transparent text-black font-mono sticky top-0"
      role="navigation"
    >
      <Link to="/" className="pl-8">
        Jack Butler
      </Link>
      <div className="px-4 cursor-pointer md:hidden">
        <FontAwesomeIcon icon="bars" />
      </div>
      <div className="pr-8 md:block hidden">
        <Link className="p-4" to="/about">
          About
        </Link>
        <Link className="p-4" to="/projects">
          Projects
        </Link>
        <Link className="p-4" to="#contact">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
