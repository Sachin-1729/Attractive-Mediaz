import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "./Images/logo.png"; // Adjust the path based on the actual location of your logo.png

function Navbar() {
  return (
    <>
      <div className="navbar  top-0 left-0 right-0 shadow-md z-50 flex justify-around items-center bg-black text-white h-12 p-2.5 mt-0 fixed">
        <Link to="/">
          <div className="logo cursor-pointer">
            <img className="w-[184px] h-[48px]" src={logo} alt="xyz" />
          </div>
        </Link>

        <div className="group-link">
          <ul className="flex justify-around gap-8">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li className="cursor-pointer">About</li>
            </Link>

            <Link to="/case">
              <li>Case Study</li>
            </Link>

            <Link to="/whatwecando">
              <li className="cursor-pointer">What We Can Do</li>
            </Link>

            {/* <li className="cursor-pointer">{"\u2550"}</li> */}
          </ul>
        </div>

        <div className="">
          <button className="button text-black mb-2  bg-white py-1 px-4 mt-2.5 rounded-full border-none  hover:bg-yellow-600">
            SCHEDULE TO TALK
          </button>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
