import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


export default function HoverDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sm:block font-fira-sans hidden">
      <div onMouseLeave={() => setOpen(false)} className="relative">
        <button
          onMouseOver={() => setOpen(true)}
          className="flex items-center  hover:bg-gray-50 p-1 bg-white border rounded"
        >
          <span className="mr-2">More...</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
        <ul
          className={`absolute z-50 bg-white right-0 min-w-40 flex-wrap space-y-0 mt-0 rounded shadow-xl ${
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
  );
}
