import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactForm = () => {
  return (
    <div className="flex w-full justify-center items-center pt-64 px-8 md:px-48 lg:px-6">
      <div className="flex flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-6 bg-mocha-dark w-full max-w-4xl sm:p-12 p-8 rounded-xl shadow-lg text-black">
        <div className="flex flex-col space-y-8 justify-between">
          <div>
            <h1 className="font-bold text-4xl tacking-wide">Contact Me</h1>
            <p className="pt-2 text-gray-600 text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Sapiente, voluptatum.
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="inline-flex space-x-2 items-center">
              <FontAwesomeIcon className="text-xl" icon="envelope" />
              <span>jackbutlerola@gmail.com</span>
            </div>
            <div className="inline-flex space-x-2 items-center">
              <FontAwesomeIcon className="text-xl" icon="phone" />
              <span>(360) 620 3526</span>
            </div>
          </div>
          <div className="flex space-x-4 text-xl">
            <a>
              <FontAwesomeIcon icon={["fab", "github"]} />
            </a>
            <a>
              <FontAwesomeIcon icon={["fab", "linkedin"]} />
            </a>
          </div>
        </div>
        {/* Form section*/}
        <div className="relative">
          <div className="bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-80">
            <form action="" className="flex flex-col space-y-4">
              <div>
                <label htmlFor="" className="text-sm">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="ring-1 ring-gray-300 w-full mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-gray-600"
                />
              </div>
              <div>
                <label htmlFor="" className="text-sm">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="ring-1 ring-gray-300 w-full mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-gray-600"
                />
              </div>
              <div>
                <label htmlFor="" className="text-sm">
                  Message
                </label>
                <textarea
                  type="textarea"
                  rows="4"
                  placeholder="Message"
                  className="ring-1 ring-gray-300 w-full mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-gray-600"
                ></textarea>
              </div>
              <button className="inline-block self-end bg-gray-50 text-gray-800 font-bold rounded-xl px-6 py-2 uppercase text-sm hover:bg-gray-300">Send message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
