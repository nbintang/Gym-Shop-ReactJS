import React from "react";
import Contactlogin from "../components/ContactLogin";
import Maps from "../components/Maps";
import { useEffect, useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      <div className=" bg-gradient-to-t from-gray-100 to-white h-[1000px]  flex items-center justify-center">
        <div id="contact" className="   font-fira-sans ">
          <div
            className="  max-w-80 sm:max-w-96  md:max-w-full  rounded"
            data-aos="fade-down"
          >
            <div className="w-full rounded  border-2  border-solid border-black">
              <div className="flex flex-wrap">
                <div className=" sm:w-[400px] w-full ">
                  {loading ? <SkeletonMap /> : <Maps />}
                </div>
                <div className="  justify-center items-center flex flex-1">
                  <div className=" flex justify-center w-full  items-center font-fira-sans flex-col   gap-7 bg-white p-2">
                    <div className="">
                      <h1 className="font-archivo sm:text-2xl md:text-4xl text-xl">
                        Contact Us
                      </h1>
                    </div>
                    <div className=" rounded max-h-[500px] border p-2">
                      <div className=" h-[420px]  flex flex-col justify-between">
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
                            className=" p-4 w-full border outline-none rounded-sm bg-gray-50 h-32 max-h-32"
                            required
                          />
                        </div>
                        <div className="h-96 flex items-center">
                          <ul className=" flex w-full justify-around flex-wrap">
                            <Contactlogin />
                          </ul>
                        </div>
                        <div className=" flex justify-center cursor-pointer sm:justify-end items-center ">
                          <button className="font-archivo border rounded border-black text-lg bg-black font-extralight text-white px-5">
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
        </div>
      </div>
    </>
  );
}

function SkeletonMap() {
  return (
    <>
      <div className="w-full animate-pulse h-full bg-gray-200"></div>
    </>
  );
}
