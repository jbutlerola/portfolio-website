import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div
      id="contact"
      className="flex w-full justify-center items-center pb-12 pt-80 px-8 md:px-48 lg:px-6"
    >
      <div className="flex flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-6 bg-zorba-100 w-full max-w-4xl sm:p-12 p-8 rounded-xl shadow-lg text-black">
        <div className="flex flex-col space-y-8 justify-between">
          <div>
            <h1 className="font-bold text-4xl tacking-wide">Contact Me</h1>
            <p className="pt-3 text-fuscous-gray-700 text-sm">
              Feel free to contact me about job openings, questions about the
              website, or any other inquiries
            </p>
          </div>
          <div className="flex flex-col space-y-8">
            <div className="inline-flex space-x-2 items-center">
              <FontAwesomeIcon className="text-xl" icon="envelope" />
              <span>jackbutlerola@gmail.com</span>
            </div>
            <div className="inline-flex space-x-2 items-center">
              <FontAwesomeIcon className="text-xl" icon="phone" />
              <span>(360) 620 3526</span>
            </div>
          </div>
          <div className="flex space-x-4 text-2xl">
            <a href="https://github.com/jbutlerola" target="_blank" rel="noreferrer">
              <FontAwesomeIcon
                className="transform hover:scale-150 transition duration-500"
                icon={["fab", "github"]}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/jack-butler-9a89a5224/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                className="transform hover:scale-150 transition duration-500"
                icon={["fab", "linkedin"]}
              />
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
