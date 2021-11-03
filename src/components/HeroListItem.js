import React from "react";

const HeroListItem = (props) => {
  return (
    <li className="pr-8">
      <a href={props.link}>
        <button class={`py-2 px-4 rounded-full ${props.onHover}`}>
          <img className="object-scale-down h-8 md:h-12 lg:h-14 w-full" src={props.imgSrc} />
        </button>
      </a>
    </li>
  );
};

export default HeroListItem;
