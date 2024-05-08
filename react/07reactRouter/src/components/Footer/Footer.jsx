import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Footer() {
  const resources = [
    { to: "/", text: "Home" },
    { to: "/about", text: "About" },
    { to: "/contact", text: "Contact" },
    { to: "/github", text: "Github" },
  ];
  const followUs = [
    { text: "Github", link: "https://github.com/as-ga" },
    { text: "Discord", link: "https://discord.com/ashutoshgaurav" },
    { text: "Twitter", link: "https://x.com/_AshutoshGaurav" },
    { text: "LinkedIn", link: "https://linkedin.com/in/ashutosh-li" },
  ];
  return (
    <footer className="bg-white border-y">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <h2 className="text-2xl font-bold sm:text-2xl text-red-600">
                Ashutosh <span className=" text-red-800">Gaurav</span>
              </h2>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Resources
              </h2>
              <ul className="text-gray-500 font-medium">
                {resources.map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${
                          isActive ? "text-orange-700" : "text-gray-700"
                        } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                      }
                    >
                      {link.text}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Follow us
              </h2>
              <ul className="text-gray-500 font-medium">
                {followUs.map((link) => (
                  <li key={link.text}>
                    <a href={link.link} className="hover:underline">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Legal
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <Link to="#" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            © 2024 by{" "}
            <a href="https://github.com/as-ga" className="hover:underline">
              Ashutosh Gaurav
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
