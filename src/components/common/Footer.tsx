import React from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="bg-primary-200 text-white px-8 py-5">
      <div className="container mx-auto flex flex-wrap justify-between ">
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <h3 className="text-xl   font-bold"></h3>
          <p className="mt-2"></p>
          <p></p>
        </div>
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <h3 className="text-xl  font-bold">Follow Me</h3>
          <div className="mt-2 flex space-x-4">
            <a href="" className="text-white hover:text-gray-400">
              <FaSquareXTwitter size={30} />
            </a>
            <a href="" className="text-white hover:text-gray-400">
              <FaLinkedin size={30} />
            </a>
            <a href="" className="text-white hover:text-gray-400">
              <FaSquareInstagram size={30} />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>&copy; {year} All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
