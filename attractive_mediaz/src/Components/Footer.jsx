import React from "react";
import logo from "./Images/logo.png";
import { Link, NavLink, Outlet } from "react-router-dom";

function Footer() {
  return (
    <div className="section  py-22 bg-black">
      <footer className=" text-white py-12">
        <div className="px-[100px] container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-lg font-bold mb-4">COMPANY</h2>
            <ul className="text-xs">
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  ABOUT
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  CAREERS
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  CONTACT
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  TESTIMONIAL
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  RECENT WORK
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-4">SERVICES</h2>
            <ul className="text-xs">
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  WEBSITE DESIGN
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  WEBSITE DEVELOPMENT
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  WEBSITE MANAGEMENT
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  WEBSITE HOSTING
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  SEO SERVICES
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-4">SUPPORT</h2>
            <ul className="text-xs">
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  HELP CENTER
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  STATUS
                </a>
              </li>
            </ul>
          </div>

          <div>
            <Link to="/">
              <img src={logo} alt="" />
            </Link>

            <h1 className="text-lg py-2">LET'SCONNECT</h1>
            <p className="text-sm font-bold py-1">Be in</p>
          </div>
        </div>

        <div className=" px-[100px] container mx-auto mt-12 text-center flex justify-between">
          <div>
            <h2 className="text-xl text-start font-semibold ">
              SUBSCRIBE TO OUR
              <br />
              NEWSLETTER
            </h2>
          </div>

          <form className="flex justify-center items-center ">
            <input
              type="email"
              placeholder="YOUR EMAIL ADDRESS"
              className="p-2 text-xs pt-[11px] pb-[11px] w-[400px] pl-4 max-w-sm bg-gray-800 text-white rounded-[80px] focus:outline-none"
            />
            <button
              type="submit"
              className="p-3 pl-[20px] pt-[11px] pb-[11px] pr-[20px] ml-3 bg-white text-black rounded-[80px] hover:bg-yellow-600 text-xs"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>

        <div className=" px-[100px] container mx-auto mt-12 flex flex-col md:flex-row  items-center justify-between">
          <div className="mb-4 md:mb-0 text-xs ">
            <p>
              © 2022,
              <Link className=" hover:text-yellow-600 " to="/">Attractive Mediaz.</Link>
              ALL RIGHTS RESERVED.
            </p>
          </div>
          <div className="flex space-x-4 text-xs pl-[500px] ">
            <a href="#" className="hover:text-gray-400 ">
              TERMS OF SERVICE
            </a>
            <a href="#" className="hover:text-gray-400">
              PRIVACY POLICY
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-behance"></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
