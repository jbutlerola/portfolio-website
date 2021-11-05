import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactForm = () => {
  return (
    <div id="contact" className="flex w-full justify-center items-center pb-12 pt-64 px-8 md:px-48 lg:px-6">
      <div className="flex flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-6 bg-zorba-100 w-full max-w-4xl sm:p-12 p-8 rounded-xl shadow-lg text-black">
        <div className="flex flex-col space-y-8 justify-between">
          <div>
            <h1 className="font-bold text-4xl tacking-wide">Contact Me</h1>
            <p className="pt-3 text-fuscous-gray-700 text-sm">
              Feel free to contact me about job openings, questions about the website, or any other inquiries
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
            <a href="https://github.com/jbutlerola" target="_blank">
              <FontAwesomeIcon icon={["fab", "github"]} />
            </a>
            <a href="https://www.linkedin.com/in/jack-butler-9a89a5224/" target="_blank">
              <FontAwesomeIcon icon={["fab", "linkedin"]} />
            </a>
          </div>
        </div>
        {/* Form section*/}
        <div className="relative">
          <div className="bg-zorba-200 rounded-xl shadow-lg p-8 text-fuscous-gray-600 md:w-80">
            <form action="" className="flex flex-col space-y-4">
              <div>
                <label htmlFor="name" className="text-sm">
                  Your Name
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  className="ring-1 ring-fuscous-gray-300 w-full mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-fuscous-gray-700"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm">
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="ring-1 ring-fuscous-gray-300 w-full mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-fuscous-gray-700"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm">
                  Message
                </label>
                <textarea
                  name="message"
                  type="textarea"
                  rows="4"
                  placeholder="Message"
                  className="ring-1 ring-fuscous-gray-300 w-full mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-fuscous-gray-700"
                ></textarea>
              </div>
              <button className="inline-block self-end bg-fuscous-gray-200 text-fuscous-gray-800 font-bold rounded-xl px-6 py-2 uppercase text-sm hover:bg-fuscous-gray-300">Send message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
