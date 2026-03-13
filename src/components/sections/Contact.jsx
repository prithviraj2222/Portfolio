import React, { useRef, forwardRef } from "react";
import emailjs from "@emailjs/browser";
import HeroCard from "../hero/HeroCard";

const Contact = forwardRef((props, ref) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i7q4f4l", //service id
        "template_jovpdtf", //template id
        form.current,
        "bLOFmjio_jU1vkgl9", //public key
      )
      .then(() => {
        emailjs.sendForm(
          "service_i7q4f4l",
          "template_e36keht",
          form.current,
          "bLOFmjio_jU1vkgl9",
        );

        form.current.reset();
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to send message ❌");
      });
  };
  return (
    <div ref={ref} className="min-h-screen w-full max-w-[1200px] flex flex-col lg:flex-row justify-center items-center text-[#303030] dark:text-white px-6 md:px-10 py-20 lg:py-0 gap-20 lg:gap-0">
      <div className="h-full w-full lg:w-1/2 flex justify-center">
        <HeroCard />
      </div>
      <div className="h-full w-full lg:w-1/2 flex flex-col justify-center gap-6">
        <h2 className="text-4xl md:text-6xl leading-none font-bold font-[mainFont] tracking-tight">
          LET'S CONNECT
        </h2>
        <p className="text-lg tracking-wide font-[paraFont] mb-4">
          Have a question or want to work together? Let's connect.
        </p>
        <div className="text-[#5E67E6] dark:text-[#D0FF71]">
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">
            <div className="w-full flex flex-col sm:flex-row gap-6">
              <label className="w-full flex flex-col gap-2 text-sm font-[paraFont]">
                Name
                <input
                  required
                  type="text"
                  name="name"
                  className="py-3 px-4 bg-[#F5F5F5] dark:bg-[#484848] rounded-3xl text-[#303030] dark:text-white border border-transparent focus:border-[#5E67E6] dark:focus:border-[#D0FF71] focus:outline-none"
                  placeholder="Name"
                />
              </label>
              <label className="w-full flex flex-col gap-2 text-sm font-[paraFont]">
                Email
                <input
                  required
                  type="email"
                  name="email"
                  className="py-3 px-4 bg-[#F5F5F5] dark:bg-[#484848] rounded-3xl text-[#303030] dark:text-white border border-transparent focus:border-[#5E67E6] dark:focus:border-[#D0FF71] focus:outline-none"
                  placeholder="Email"
                />
              </label>
            </div>
            <label className="w-full flex flex-col gap-2 text-sm font-[paraFont]">
              What Can I Help You...
              <textarea
                required
                className="h-35 p-4 bg-[#F5F5F5] dark:bg-[#484848] rounded-3xl text-[#303030] dark:text-white  border border-transparent focus:border-[#5E67E6] dark:focus:border-[#D0FF71] focus:outline-none"
                name="message"
                placeholder="Your Message..."
              ></textarea>
            </label>
            <div>
              <button
                type="submit"
                className="border px-10 pt-1 pb-1.5 border-[#5E67E6] dark:border-[#D0FF71] text-[#5E67E6] dark:text-[#D0FF71] font-[mainFont] text-2xl font-semibold rounded-3xl cursor-pointer"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
})

export default Contact;
