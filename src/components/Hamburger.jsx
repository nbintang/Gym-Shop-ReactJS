import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHamburger } from "@fortawesome/free-solid-svg-icons";

export default function Hamburger() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className=" block sm:hidden">
        <div
          className=" border text-lg p-2 z hover:bg-gray-100 active:bg-gray-300 rounded justify-center flex items-center "
          onClick={() => setOpen(!open)}
        >
          <div className="relative">
            <button>
              <FontAwesomeIcon icon={faBars} />
            </button>

            <ul
              className={`absolute z-50  bg-white right-0  min-w-40 flex-wrap space-y-0 mt-0 rounded shadow-xl ${
                open ? "block" : "hidden"
              }`}
            >
              <a
                className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100"
                href=""
              >
                Login
              </a>
              <a
                className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100"
                href=""
              >
                Home
              </a>
              <a
                className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100"
                href=""
              >
                About
              </a>
              <a
                className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100"
                href=""
              >
                Services
              </a>
              <a
                className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100"
                href=""
              >
                Blog
              </a>
              <a
                className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100"
                href=""
              >
                Contact
              </a>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
