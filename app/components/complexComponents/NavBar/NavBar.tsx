"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { use } from "react";

type Props = {
  websiteName: string;
  logoSrc: string;
  logoAlt: string;
  userDetails?: {
    name: string;
    email: string;
    avatar: string;
  };
  mainMenu: {
    name: string;
    route: string;
  }[];
  userMenu: {
    name: string;
    handler: () => void;
  }[];
  logingRoute?: string;
  signupRoute?: string;
};

const NavBar: React.FC<Props> = ({
  websiteName,
  logoSrc,
  logoAlt,
  userDetails,
  mainMenu,
  userMenu,
  logingRoute,
  signupRoute,
}) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const pathName = usePathname();

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src={logoSrc}
            alt={logoAlt}
            className="h-8 w-8"
            width={100}
            height={100}
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            {websiteName}
          </span>
        </a>
        {userDetails ? (
          <div className="flex items-end md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse relative">
            <div className="flex flex-col items-end justify-center">
              <button
                type="button"
                className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                id="user-menu-button"
                aria-expanded="false"
                data-dropdown-toggle="user-dropdown"
                data-dropdown-placement="bottom"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className="sr-only">Open user menu</span>
                <Image
                  width={100}
                  height={100}
                  className="w-8 h-8 rounded-full"
                  src={userDetails.avatar}
                  alt="user photo"
                />
              </button>
              {/* <!-- Dropdown menu --> */}
              <div
                className={`z-50 ${
                  isMenuOpen ? "" : "hidden"
                } absolute top-5 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}
                id="user-dropdown"
              >
                <div className="px-4 py-3">
                  <span className="block text-sm text-gray-900 dark:text-white">
                    {userDetails.name}
                  </span>
                  <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                    {userDetails.email}
                  </span>
                </div>
                <ul className="py-2" aria-labelledby="user-menu-button">
                  <li>
                    {userMenu.map((item, index) => (
                      <button
                        key={index}
                        type="button"
                        className="w-full block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        onClick={item.handler}
                      >
                        {item.name}
                      </button>
                    ))}
                  </li>
                </ul>
              </div>
            </div>
            <button
              data-collapse-toggle="navbar-user"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-user"
              aria-expanded="false"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
        ) : (
          <div className="flex items-end md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse relative">
            <div className="flex flex-col items-end justify-center">
              <div className="flex items-center space-x-6 rtl:space-x-reverse">
                {signupRoute && (
                  <Link
                    href={signupRoute}
                    className={`block py-2 px-3 ${
                      pathName === signupRoute
                        ? "md:text-blue-700 md:dark:text-blue-500"
                        : "text-gray-900"
                    } font-semibold text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                  >
                    Sign Up
                  </Link>
                )}
                {logingRoute && (
                  <Link
                    href={logingRoute}
                    className={`block py-2 px-3 ${
                      pathName === logingRoute
                        ? "md:text-blue-700 md:dark:text-blue-500"
                        : "text-gray-900"
                    } font-semibold text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}

        <div
          className={`items-center justify-between w-full ${
            isMobileMenuOpen ? "" : "hidden"
          }  md:flex md:w-auto md:order-1`}
          id="navbar-user"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {mainMenu.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.route}
                  className={`block py-2 px-3 ${
                    pathName === item.route
                      ? "md:text-blue-700 md:dark:text-blue-500"
                      : "text-gray-900"
                  } text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
