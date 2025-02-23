import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-gradient-to-r mb-7 from-orange-500 to-purple-500 font-englishFont w-full fixed z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 px-5 md:px-10 lg:px-20">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="src/assets/logo.png" className="h-10 rounded-full" alt="support deal Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-50">
            SupportDeal
          </span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-3">
          <div className="relative bg-white rounded-md">
          <button
            type="button"
            className=" bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent hover:bg-gradient-to-r from-orangeColor to-purpleColor focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-gray-900  dark:focus:ring-blue-800"
          >
            Register
          </button>
          </div>
          <div className="relative bg-white rounded-md">
          <button
            type="button"
            className=" bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent hover:bg-gradient-to-r from-orangeColor to-purpleColor focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-gray-900  dark:focus:ring-blue-800"
          >
            Login
          </button>
          </div>
          </div>
        {/* Menu Button for Small Screens */}
        <button
          onClick={toggleMenu}
          type="button"
          className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-sticky"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:w-auto md:order-1">
          <ul className="flex space-x-8 font-medium">
            {["/shops", "/products", "/deal", "/aboutUs"].map((path) => (
              <li key={path}>
                <Link
                  to={path}
                  className={`block py-2 px-3 rounded md:p-0 ${
                    isActive(path) ? "text-white bg-blue-700 md:bg-transparent md:text-blue-700" : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
                  }`}
                >
                  {path.replace("/", "").charAt(0).toUpperCase() + path.replace("/", "").slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu (Hidden by Default) */}
        <div className={`absolute top-16 z-50 left-0 w-full bg-white shadow-md md:hidden transition-transform duration-300 ${isMenuOpen ? "block" : "hidden"}`}>
          <ul className="flex flex-col p-4 space-y-4">
            {["/shops", "/products", "/deal", "/aboutUs"].map((path) => (
              <li key={path}>
                <Link
                  to={path}
                  onClick={() => setIsMenuOpen(false)} // Close menu on click
                  className={`block py-2 px-3 rounded ${
                    isActive(path) ? "text-white bg-gradient-to-r from-orange-500 to-purple-500 " : "text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  {path.replace("/", "").charAt(0).toUpperCase() + path.replace("/", "").slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
