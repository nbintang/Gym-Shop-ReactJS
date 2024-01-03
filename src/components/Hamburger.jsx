import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHamburger } from "@fortawesome/free-solid-svg-icons";

export default function Hamburger(){



  return <>
  <div className="sm:hidden border text-lg p-2 hover:bg-gray-100 active:bg-gray-300 rounded justify-center flex items-center ">
    <FontAwesomeIcon icon={faBars} />
  </div>
  </>
}