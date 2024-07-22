import React from "react";
import { Link } from "react-router-dom";

const Left = () => {
  return (
    <div className="md:w-1/3 w-full align-center m-auto">
      <h1 className="text-4xl text-[#F25C54] sm:text-4xl font-bold title-font mb-4">
        Contact Us
      </h1>
      We're here to assist you! If you have any questions or need assistance,
      please feel free to reach out to us. You can also email us &nbsp;
      <Link to="/" className="font-medium text-[#F25C54] hover:underline">
        click here to reveal our protected email address
      </Link>
      <p className="leading-relaxed text-xl text-gray-900 mt-8">
        Connect with us on social media:
      </p>
      <span className="inline-flex mt-6 justify-center sm:justify-start">
        <a
          className="text-gray-500 hover:text-gray-900"
          target="_blank"
          href="https://twitter.com/example"
        >
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-6 h-6"
            viewBox="0 0 24 24"
          >
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a
          className="ml-3 text-gray-500 hover:text-gray-900"
          href="https://www.instagram.com/example/"
          target="_blank"
        >
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-6 h-6"
            viewBox="0 0 24 24"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
      </span>
    </div>
  );
};

export default Left;
