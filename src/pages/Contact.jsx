import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Contactlogin from "../components/ContactLogin";

export default function Contact() {
  return (
    <>
      <div className=" h-[1000px] mt-10 flex items-center font-fira-sans flex-col  justify-center">
      <div className="mb-7">
          <h1 className="font-archivo text-4xl">Contact Us</h1>
        </div>
<div className="border-2 min-w-0 rounded border-black p-8 border-solid ">

        <div className=" h-96 flex flex-col justify-between">
          <div className="flex gap-3  flex-col text-lg">
            <label htmlFor="username">Username</label>
            <input
            className="bg-gray-50  h-8  py-4"
              type="username"
              name="username"
              id="username"
              placeholder="username"
              required
            />
            <label htmlFor="password">Password</label>
            <input
            className="bg-gray h-8"
              type="password"
              name="password"
              id="password"
              placeholder="password"
              required
            />
            <label htmlFor="message">Send Your Message</label>
            <input
              type="message"
              placeholder="Send Message"
              className="w-full text-center bg-gray-50 h-40"
              required
            />
          </div>
          <div className="mt-4">
            <ul className=" flex w-full justify-around flex-wrap">
              <Contactlogin/>
              <Contactlogin/>
              <Contactlogin/>
              
            </ul>
          </div>
          <div className=" flex justify-center mr-3 cursor-pointer sm:justify-end items-center mt-3 ">
            <button className="font-nova border rounded border-black text-lg px-5">
              Send
            </button>
          </div>
        </div>
</div>
      </div>
    </>
  );
}

