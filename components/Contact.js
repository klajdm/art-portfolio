import React from "react";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="relative min-w-fit min-h-screen flex  flex-col text-center justify-evenly mx-auto items-center lg:ml-[240px]">
      <motion.h2
        initial={{
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{ once: true }}
        className=" absolute top-12 lg:top-32 md:top-16 uppercase tracking-[10px] text-gray-500 text-xl lg:text-2xl "
      >
        Contact
      </motion.h2>

      <motion.div
        initial={{
          opacity: 0,
        }}
        transition={{
          duration: 1.7,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{ once: true }}
        className=" flex flex-col space-y-10"
      >
        <div className="space-y-5">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-gray-500/80 h-5  w-5 animate-pulse" />
            <p className="">+355675432456</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-gray-500/80 h-5  w-5 animate-pulse" />
            <p className="">klajdart@gmail.com</p>
          </div>
        </div>

        <form className=" flex flex-col space-y-5 md:space-y-2 w-fit mx-auto">
          <div className="flex-col md:flex-row md:space-x-2 space-y-5 md:space-y-0">
            <input
              placeholder="Name"
              className="contactInput w-full md:w-fit"
              type="text"
              name="name"
              autoComplete="on"
            />
            <input
              placeholder="Email"
              className="contactInput w-full md:w-fit"
              type="email"
              name="email"
              autoComplete="on"
            />
          </div>

          <input
            placeholder="Subject"
            className="contactInput"
            type="text"
            name="submit"
          />

          <textarea
            placeholder="Message"
            className="contactInput"
            name="message"
          />
          <div className="flex items-end justify-end pt-4">
            <button
              type="submit"
              className=" bg-black/90 border border-black py-2 px-5 rounded-full text-white font-semibold text hover:bg-black/80"
            >
              Send Message
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
