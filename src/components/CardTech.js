import React from "react";

const CardTech = (props) => {
  return (
    <span className="inline-block bg-fuscous-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
      {props.technology}
    </span>
  );
};

export default CardTech;
