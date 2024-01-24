import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHamburger } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Hamburger() {
  const [ open, setOpen] = useState(false)
  
  // useEffect(() => {
  //   setOpen(false);
  // }, [])

  const outsideClick = (e) => {
    if(open && !e.target.closest(".navbar")) {
      setOpen(false)
    }
  };

  // const toggle = () => {
  //   setOpen(!open);
  // };

  useEffect(() => {
    document.addEventListener("click", outsideClick)
    return () => {
      document.removeEventListener('click', outsideClick)
    };
  }, [open])

  return (
    <>
      <div className=" navbar block sm:hidden">
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
                href="#home"
              >
                Login
              </a>
              <a
                className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100"
                href="#home"
              >
                Home
              </a>
              <a
                className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100"
                href="#about"
              >
                About
              </a>
              <a
                className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100"
                href="#footer"
              >
                Services
              </a>
              <a
                className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100"
                href="#about"
              >
                Blog
              </a>
              <a
                className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100"
                href="#contact"
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
