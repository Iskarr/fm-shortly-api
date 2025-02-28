"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="py-4 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto relative z-50">
      <div className="max-w-4xl mx-auto">
        {/* Changed from max-w-7xl to max-w-4xl to match other components */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="font-bold text-2xl text-gray-800">Shortly</span>
            </div>
            <div className="hidden md:block ml-10">
              <div className="flex space-x-8">
                <Link href="#" className="text-gray-600 hover:text-gray-800">
                  Features
                </Link>
                <Link href="#" className="text-gray-600 hover:text-gray-800">
                  Pricing
                </Link>
                <Link href="#" className="text-gray-600 hover:text-gray-800">
                  Resources
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="#" className="text-gray-600 hover:text-gray-800">
              Login
            </Link>
            <Link
              href="#"
              className="bg-(--Cyan) text-white px-4 py-2 rounded-full font-medium hover:bg-teal-600 transition-colors"
            >
              Sign Up
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-100 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
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
          </div>
        </div>
      </div>

      {/* Mobile menu - positioned absolutely to overlap content */}
      {isOpen && (
        <div className="md:hidden absolute left-0 right-0 px-4 mt-4 z-50">
          <div className="max-w-4xl mx-auto bg-(--DarkViolet) rounded-lg shadow-lg p-4 space-y-2">
            <Link
              href="#"
              className="block py-2 text-center text-white poppins-semibold hover:text-gray-800"
            >
              Features
            </Link>
            <Link
              href="#"
              className="block py-2 text-center text-white poppins-semibold hover:text-gray-800"
            >
              Pricing
            </Link>
            <Link
              href="#"
              className="block py-2 text-center text-white poppins-semibold hover:text-gray-800"
            >
              Resources
            </Link>
            <hr className="my-2 text-(--Gray) opacity-30" />
            <Link
              href="#"
              className="block py-2 text-center text-white poppins-bold hover:text-gray-800"
            >
              Login
            </Link>
            <Link
              href="#"
              className="block bg-(--Cyan) text-white py-4 poppins-bold rounded-full text-center font-medium hover:bg-(--Cyan) transition-colors mx-auto w-4/5"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
