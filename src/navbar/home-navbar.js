import React, { useState } from "react";
import { HiAcademicCap } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { useUserAuth } from "../utils/auth/firebase-auth-context";
import LinkNavbar from "./link-navbar";

function HomeNavbar() {
  const { user, logOut } = useUserAuth();
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <nav className="shadow-2xl fixed top-0 z-50 bg-black px-2 sm:px-6 py-4 text-white w-screen">
      <div className="flex flex-wrap justify-between items-center w-full">
        <NavLink to="/" className="flex items-center">
          <HiAcademicCap className="text-4xl" />
          <span className="self-center text-3xl font-montserrat font-bold whitespace-nowrap pl-2">
            HT-Dat
          </span>
        </NavLink>
        <button
          type="button"
          className={
            "inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-gray-200" +
            (isNavExpanded ? " bg-gray-100" : "")
          }
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
          <svg
            className="hidden w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={
            "w-full md:w-fit md:block" + (isNavExpanded ? " block" : " hidden")
          }
        >
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-xl md:font-montserrat">
            <li>
              <LinkNavbar to="/#about-me" text="about me" />
            </li>

            <li>
              <LinkNavbar to="/blog" text="blog" />
            </li>
            {!user ? (
              <li>
                <LinkNavbar to="/blog/login" text="sign in" />
              </li>
            ) : (
              <>
                <li>
                  <LinkNavbar to="/blog/my-content" text="my content" />
                </li>
                <li>
                  <LinkNavbar
                    to="/blog"
                    text="log out"
                    action={logOut}
                    useIsActive={true}
                  />
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default HomeNavbar;
