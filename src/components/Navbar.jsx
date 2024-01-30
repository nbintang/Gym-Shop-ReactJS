import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Hamburger from "./Hamburger";
import Search from "./Search";
import Button from "./Button";
import Dropdown from "./Dropdown";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <header className="max-w-full p-4 z-50 sticky top-0  bg-white">
        <nav className="flex items-center justify-between ">
          <div className="">
            <a href="#home">
              <img
                className="w-10"
                src="https://cdn.gymshark.com/images/branding/gs-icon-black.svg"
                alt=""
              />
            </a>
          </div>
          <div className="flex space-x-2 items-center">
            <Search></Search>
            <Link to="/error">
              <button>
                <FontAwesomeIcon icon={faCartShopping} />
              </button>
            </Link>
            <Dropdown />
            <Hamburger />
            <Link to="/login">
            <Button />
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}
