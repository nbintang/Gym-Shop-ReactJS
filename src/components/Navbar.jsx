import React from "react";

import Search from "./Search";
import Button from "./Button";
import Dropdown from "./Dropdown";

export default function Navbar() {
  return (
    <>
      <header className="max-w-full p-4">
        <nav className="flex items-center justify-between ">
          <div className="">
            <a href="">
              <img
                className="w-10"
                src="https://cdn.gymshark.com/images/branding/gs-icon-black.svg"
                alt=""
              />
            </a>
          </div>
          <div className="flex space-x-2">
            <Search></Search>
            <Dropdown />

            <Button />
          </div>
        </nav>
      </header>
    </>
  );
}
