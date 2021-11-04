import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeroListItem = (props) => {
  return (
    <li className="">
      <a href={props.link} className="text-xl md:text-2xl lg:text-4xl text-di-serria-600 px-8 py-2 rounded-xl hover:bg-harvest-gold-400">
        {/* <button class={`py-2 px-4 rounded-full ${props.onHover}`}> */}
        <FontAwesomeIcon icon={['fab', props.logo]} />
      </a>
    </li>
  );
};

export default HeroListItem;
