import React from "react";
import { Fot1, Fot2 } from "../Components/index";

export default () => {
  const footerNavs = [
    {
      href: "javascript:void(0)",
      name: "License",
    },
    {
      href: "javascript:void(0)",
      name: "Privacy Policy",
    },
    {
      href: "javascript:void(0)",
      name: "About Us",
    },
  ];

  return (
    <footer className="pt-10">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="justify-between sm:flex">
          <div className="space-y-6">
            <img
              src="https://www.floatui.com/logo.svg"
              width={120}
              height={50}
              alt="Float UI logo"
            />
            <p className="max-w-md">
              Nulla acohu akjn ahshin oasciuh joicahsc noichjao.
            </p>
            <ul className="flex flex-wrap items-center gap-4 text-sm sm:text-base">
              {footerNavs.map((item, idx) => (
                <li key={idx} className="text-gray-800 hover:text-gray-500 duration-150">
                  <a href={item.href}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6">
            <p className="text-gray-800">Get the app</p>
            <div className="flex items-center gap-3 mt-3 sm:block">
              <a href="javascript:void(0)">
                <Fot1 />
              </a>
              <a href="javascript:void(0)" className="mt-0 block sm:mt-3">
                <Fot2 />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 py-10 border-t md:text-center">
          <p className="text-sm text-gray-800">
            &copy; 2021 Float UI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
