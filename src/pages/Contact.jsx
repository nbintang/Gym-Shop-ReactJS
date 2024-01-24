import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Contactlogin from "../components/ContactLogin";
import Maps from "../components/Maps";

export default function Contact() {
  return (
    <>
      <div className=" h-[1000px]  ">
        <div className=" h-screen max-w-full flex items-center font-fira-sans flex-col  justify-center">
          <div className="flex gap-3 justify-center flex-wrap">
            <Maps />
            <div className="w-72 sm:w-96">
              <div className=" flex items-center font-fira-sans flex-col  gap-7 rounded border-solid border-2 p-2">
                <div className="">
                  <h1 className="font-archivo sm:text-2xl md:text-4xl text-xl">
                    Contact Us
                  </h1>
                </div>
                <div className=" min-w-0 rounded border p-2">
                  <div className=" h-96 flex flex-col justify-between">
                    <div className="flex gap-3  flex-col text-lg [&>input]:outline-none [&>*]:sm:text-lg  [&>*]:md:text-xl  [&>*]:text-md">
                      <label htmlFor="username">Username</label>
                      <input
                        className="bg-gray-50 border changed-placeholder outline-none rounded-sm  h-8  py-4"
                        type="username"
                        name="username"
                        id="username"
                        placeholder="username"
                        required
                      />
                      <label htmlFor="password">Password</label>
                      <input
                        className="bg-gray-50 border rounded-sm h-8 changed-placeholder"
                        type="password"
                        name="password"
                        id="password"
                        placeholder="password"
                        required
                      />
                      <label htmlFor="message">Send Your Message</label>
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        type="message"
                        placeholder="Send Message"
                        className=" p-4 w-full border outline-none rounded-sm bg-gray-50 h-32 max-h-40"
                        required
                      />
                    </div>
                    <div className="mt-4">
                      <ul className=" flex w-full justify-around flex-wrap">
                        <Contactlogin />

                      </ul>
                    </div>
                    <div className=" flex justify-center mr-3 cursor-pointer sm:justify-end items-center mt-7 ">
                      <button className="font-nova border rounded border-black text-lg bg-black text-white px-5">
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
