import React from "react";

export default function Contactlogin() {
  const iconPath = [{
    icon:<img src="assets/img/brand/google.svg" className="w-5" alt="" />
  },
{
  icon:<img src="assets/img/brand/facebook.svg" className="w-5" alt="" />
},
{
  icon:<img src="assets/img/brand/github.svg" className="w-5" alt="" />
}
]
return iconPath.map(({icon}, index) => {
  return (
    <>
      <li className="border border-black hover:bg-gray-50 active:bg-gray-100 flex justify-center px-6 sm:px-9  h-7 cursor-pointer rounded">
       {icon}
      </li>
    </>
    );
})


}
