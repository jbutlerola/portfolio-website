import React from "react";

const Card = (props) => {
  return (
    // Card for portfolio projects
    //TODO: implement props for text and image, fix sizing and responsive sizing
    <div className=" px-16 md:px-48 lg:px-64 ">
      <div className="p-16 object-scale-down bg-gray-100 rounded-lg">
        <h1 className="font-bold text-2xl mb-3 text-center">{props.title}</h1>
        <a href={props.url} target="_blank">
          <img
            src="../images/keeper-site.png"
            alt="Google Keep cloned website"
            className="rounded-lg h-auto"
          />
        </a>
        <div className="px-6 pt-4 pb-2">
          <p className="text-gray-700 text-base">{props.description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            React
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Material-ui
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;