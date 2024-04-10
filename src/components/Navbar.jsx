import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";
//* react icon
import { GrLanguage } from "react-icons/gr";
import { FaXmark, FaBars } from "react-icons/fa6";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItem = [
    { link: "Overview", path: "home" },
    { link: "Feature", path: "feature" },
    { link: "About", path: "about" },
    { link: "Pricing", path: "pricing" },
  ];
  return (
    <>
      {/*navitem for computer devices*/}
      <nav className="bg-white md:px-14 p-4  border-b max-w-screen-2xl text-primary fixed top-0 right-0 left-0">
        <div className="text-lg font-medium container mx-auto flex justify-between items-center">
          <div className="flex space-x-14 items-center">
            <a
              href="/"
              className="text-2xl font-semibold flex items-center space-x-3 text-primary"
            >
              <img
                src={logo}
                alt=""
                className="w-10 inline-block items-center"
              />
              <span>XYZ</span>
            </a>
            <ul className="md:flex space-x-12 hidden">
              {navItem.map((item, index) => {
                return (
                  <Link
                    spy={true}
                    smooth={true}
                    offset={-100}
                    activeClass="active"
                    className=" block hover:text-gray-300 transition-all cursor-pointer"
                    to={item.path}
                    key={index}
                  >
                    {item.link}
                  </Link>
                );
              })}
            </ul>
          </div>
          {/*Language and Signup */}
          <div className=" space-x-12 hidden md:flex items-center">
            <a
              href="/"
              className=" hidden lg:flex items-center hover:text-secondary"
            >
              <GrLanguage className="mr-2" />
              <span>Language</span>
            </a>
            <button className=" bg-secondary py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600">
              Sign up
            </button>
          </div>
          {/* menu btn. only display on mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className=" text-white  focus:outline-none focus:text-gray-300 "
            >
              {isMenuOpen ? (
                <FaXmark className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>
      {/*navitem for mobile devices*/}
      <div
        className={`md:hidden space-y-4 px-4 pt-24 pb-5 bg-secondary text-xl ${
          isMenuOpen ? " block fixed top-0 right-0 left-0 " : "hidden"
        }`}
      >
        {navItem.map((item, index) => {
          return (
            <Link
              spy={true}
              smooth={true}
              offset={-80}
              activeClass="active"
              key={index}
              className=" block text-white hover:text-gray-300 transition-all cursor-pointer"
              to={item.path}
              onClick={toggleMenu}
            >
              {item.link}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Navbar;
