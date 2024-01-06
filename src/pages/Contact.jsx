import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
  return (
    <>
      <div className="h-screen flex items-center flex-col justify-center">
        <div>
          <h1>Contact 1</h1>
        </div>
        <div className="flex flex-col w-96">
          <label htmlFor="username">Username</label>
          <input type="username" name="username" id="username"  placeholder="username"/>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password"  placeholder="password"/>
          <label htmlFor="message">Send Your Message</label>
          <input type="message" placeholder="Message" className="w-full h-32"/>
        </div>
      </div>
    </>
  );
}
