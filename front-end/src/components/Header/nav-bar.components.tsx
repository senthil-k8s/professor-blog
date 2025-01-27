"use client";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const navPages = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/about",
    title: "About",
  },
  {
    path: "/blog",
    title: "Blogs",
  },
  {
    path: "/contact",
    title: "Contact",
  },
];

function Navbar() {
  const pathName = usePathname();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="pb-6 lg:pb-0">
      <div className="pb-1 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 bg-[#6366f1] rounded-b-xl">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <a href="#" title="" className="flex text-slate-800">
              <h1 className="font-bold text-xl text-white">
                Dr. S. Jayarama Reddy
              </h1>
            </a>
          </div>

          <button
            type="button"
            onClick={toggleMenu}
            className="inline-flex p-2 bg-gray-100 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-200 hover:bg-gray-400"
          >
            <svg
              className="block w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 8h16M4 16h16"
              />
            </svg>

            <svg
              className="hidden w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-5">
            {navPages.map((page: any) => [
              <a
                key={page?.path}
                href={page?.path}
                title=""
                className={`text-base font-medium text-white transition-all duration-200 hover:text-gray-100 focus:text-gray-100 ${
                  pathName == page?.path && "underline"
                }`}
              >
                {page?.title}
              </a>,
            ])}
          </div>

          <a
            href="/"
            title=""
            className="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-black transition-all duration-200 bg-white border border-transparent rounded-md lg:inline-flex hover:bg-gray-200 focus:bg-gray-200"
            role="button"
          >
            Get in Touch
          </a>
        </nav>

        {showMenu && (
          <nav className="mb-5 pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden">
            <div className="flow-root">
              <div className="flex flex-col px-6 -my-2 space-y-1">
                <a
                  href="/"
                  title=""
                  className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  Home
                </a>

                <a
                  href="/about"
                  title=""
                  className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  About
                </a>

                <a
                  href="/blog"
                  title=""
                  className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  Blogs
                </a>

                <a
                  href="/contact"
                  title=""
                  className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  Contact
                </a>
              </div>
            </div>

            <div className="px-6 mt-6">
              <a
                href="#"
                title=""
                className="inline-flex justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md tems-center hover:bg-blue-700 focus:bg-blue-700"
                role="button"
              >
                Get started now
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Navbar;
