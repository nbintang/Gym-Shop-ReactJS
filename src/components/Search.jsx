import React, { useState } from "react";
import { TERipple } from "tw-elements-react";

export default function Search() {

  const [open, setOpen] = useState(false)


  return (
    <>
      <div class="relative flex items-stretch">
        <input
          type="search"
          class={`relative placeholder:font-nova ${open ? "opacity-90" : "opacity-0"} transition-opacity mt-1 sm:m-0 h-8 sm:w-72 w-32  min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary`}
          placeholder="Search"
          aria-label="Search"
          aria-describedby="button-addon2"
          
        />

        <span
          class={`input-group-text ${open ? "cursor-text" : "cursor-default"} active:rounded-full active:bg-gray-100 transition-all flex cursor-pointer items-center whitespace-nowrap  px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200`}
          id="basic-addon2"
          onClick={() => setOpen(!open)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="191717"
            class="h-5 w-6"
          >
            <path
              fill-rule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clip-rule="evenodd"
  
            ></path>
          </svg>
        </span>
      </div>
    </>
  );
}
