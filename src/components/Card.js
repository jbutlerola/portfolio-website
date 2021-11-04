import React from "react";

const Card = (props) => {
  return (
    // Card for portfolio projects
    //TODO: implement props for text and image, fix sizing and responsive sizing
    <div className="px-8 md:px-48 lg:px-64 text-fuscous-gray-700">
      <div className="p-6 md:px-12 lg:px-16 object-scale-down bg-zorba-100 rounded-xl shadow-lg">
      <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl tacking-wide text-center p-4">{props.title}</h1>
        <a href={props.url} target="_blank">
          <img
            src="../images/keeper-site.png"
            alt="Google Keep cloned website"
            className="rounded-xl h-auto"
          />
        </a>
        <div className="px-6 pt-4 pb-2">
          <p className="text-base">{props.description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-fuscous-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
            React
          </span>
          <span className="inline-block bg-fuscous-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
            Material-ui
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
