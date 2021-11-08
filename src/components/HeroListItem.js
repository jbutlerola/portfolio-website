import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeroListItem = (props) => {
  return (
    <li className="">
      <a href={props.link} className="text-di-serria-600 px-8 py-2 rounded-xl" target="_blank" rel="noreferrer">
        <FontAwesomeIcon className={`text-2xl md:text-3xl lg:text-4xl transform hover:scale-150 hover:text-${props.techColor} transition duration-500`} icon={['fab', props.logo]} />
      </a>
    </li>
  );
};

export default HeroListItem;
