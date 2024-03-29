import React from "react";
import { FaXTwitter, FaSquareFacebook, FaGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";


export default function Footer() {
  const footerList = [
    {
      title: "Customer Care",
      list: [
        {
          title: "Contact Us",
          href: "",
        },
        {
          title: "FAQs",
          href: "",
        },
        {
          title: "Returns & Exchanges",
          href: "",
        },
        {
          title: "Shipping & Handling",
          href: "",
        },
        {
          title: "Damaged or Defected Items",
          href: "",
        },
        {
          title: "Cancelling or Changing an Order",
          href: "",
        },
        {
          title: "Terms of Service",
          href: "",
        },
        {
          title: "Privacy Policy",
          href: "",
        },
      ],
    },
    {
      title: "Inside Grace Eleyae",
      list: [
        {
          title: "About Us",
          href: "",
        },
        {
          title: "Sportzy Magazine",
          href: "",
        },
        {
          title: "Why Us?",
          href: "",
        },
        {
          title: "Contact Us",
          href: "",
        },
        {
          title: "wholesale",
          href: "",
        },
        {
          title: "carrers",
          href: "",
        },
      ],
    },
    {
      title: "My Account",
      list: [
        {
          title: "sign in/register",
          href: "",
        },
        {
          title: "my wishlist",
          href: "",
        },
        {
          title: "my cart",
          href: "",
        },
      ],
    },
    {
      title: "Top Searches",
      list: [
        {
          title: "stockists",
          href: "",
        },
        {
          title: "turban",
          href: "",
        },
        {
          title: "shipping",
          href: "",
        },
        {
          title: "slap",
          href: "",
        },
        {
          title: "black",
          href: "",
        },
        {
          title: "satin",
          href: "",
        },
        {
          title: "sizing",
          href: "",
        },
      ],
    },
  ];

  const iconList = [
    {
      icon:<FaSquareFacebook/>,
      url:"https://www.facebook.com/binyanglaper.binyanglaper/"
    },
    {
      icon: <FaXTwitter />,
      url: "https://twitter.com/home"
    },
    {
      icon: <FaGithub />,
      url:"https://github.com/"
    },
    {
      icon: <SiGmail/>,
      url: "https://www.google.com/intl/id/gmail/about/"
    }
  ];
  return (
    <>
      <footer id="footer" className="flex w-full   flex-col justify-center items-center bg-black text-white p-4 sm:text-sm">
        <div className="flex justify-between gap-y-3 gap-x-2 min-w-0 max-w-full w-full flex-wrap">
          {footerList.map(({ title, list }) => {
            return (
              <>
                <ul className="px-2 ">
                  <li className="sm:text-xl text-lg font-bold ">{title}</li>
                  <div className="space-y-3">
                  {list.map(({ title, href }) => {
                    return (
                      <li className="hover:underline text-sm sm:text-md">
                        <a href={href}>
                          {title.charAt(0).toUpperCase() + title.slice(1)}
                        </a>
                      </li>
                    );
                  })}
                  </div>
                </ul>
              </>
            );
          })}
          <div className="flex flex-col w-56 gap-y-4">
            <h1 className="sm:text-lg text-md font-bold">
              Sign Up & get 10% off your next order
            </h1>
            <input
              type="text"
              placeholder="Email Address"
              className="outline-none w-32 p-1 text-black rounded"
              required
            />
            <div className="">
              <button className="p-3 bg-[#F5F5F5] font-archivo text-black font-extralight uppercase rounded-sm">
                Subscribe
              </button>
            </div>
            <div className="flex ">
              <ul className="flex  gap-2">
              {iconList.map(({ icon, url }) => {
                return (
                  
                    <li className="text-xl ">
                      <a href={url}>{icon}</a>
                    </li>
                  
                )
              })}
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full flex mt-3 text-sm sm:text-md justify-between border-t border-white bg-black text-white">
          <h1>© All right Reserved || 2024</h1>
          <h1 className="font-fira-sans">BXntang</h1>
        </div>
      </footer>
    </>
  );
}
