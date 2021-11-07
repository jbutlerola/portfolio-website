import React from "react";

const CardTechs = (props) => {
  return (
    <div>
      {props.cardTechnologies.map((item, index) => {
        return (
        <span key={index} className="inline-block bg-fuscous-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
          {item}
        </span>
      )})}
    </div>
  );
};

export default CardTechs;
