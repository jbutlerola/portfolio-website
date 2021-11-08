import React, { useRef } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ugsc4di",
        "template_un8zdsk",
        form.current,
        "user_XZt542WWKXJTf4JRIEyim"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset()
  };

  return (
    <div className="relative">
      <div className="bg-zorba-200 rounded-xl shadow-lg p-8 text-fuscous-gray-600 md:w-80">
        <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4">
          <div>
            <label htmlFor="name" className="text-sm">
              Your Name
            </label>
            <input
              id="name"
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
              id="email"
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
              id="message"
              name="message"
              type="textarea"
              rows="4"
              placeholder="Message"
              className="ring-1 ring-fuscous-gray-300 w-full mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-fuscous-gray-700"
            ></textarea>
          </div>
          <button
            type="submit"
            value="Send"
            className="inline-block self-end bg-fuscous-gray-200 text-fuscous-gray-800 font-bold rounded-xl px-6 py-2 uppercase text-sm hover:bg-fuscous-gray-300"
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
