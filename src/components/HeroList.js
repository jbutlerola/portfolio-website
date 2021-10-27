import React from "react";

const HeroList = () => {
  return (
    <ul className="flex justify-between">
      <li className="pr-8">
        <a href="https://www.mongodb.com/">
          <button class=" hover:bg-green-600 py-2 px-4 rounded-full">
            <img
              className="object-scale-down h-12 w-full"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
            />
          </button>
        </a>
      </li>
      <li className="pr-8">
        <a href="https://expressjs.com/">
          <button class=" hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full">
            <img
              className="object-scale-down h-12 w-full"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
            />
          </button>
        </a>
      </li>
      <li className="pr-8">
        <a href="https://reactjs.org/">
          <button class=" hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            <img
              className="object-scale-down h-12 w-full"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            />
          </button>
        </a>
      </li>
      <li className="pr-8">
        <a href="https://nodejs.org/en/">
          <button class=" hover:bg-green-800 text-white font-bold py-2 px-4 rounded-full">
            <img
              className="object-scale-down h-12 w-full"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            />
          </button>
        </a>
      </li>
    </ul>
  );
};

export default HeroList;
