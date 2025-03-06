import React, { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";

const NavItem = ({ href, label, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <NavLink
      to={href}
      className={`px-6 py-2 transition-all duration-300 rounded-3xl ${
        isActive ? "bg-primary text-secondary" : "bg-secondary text-primary "
      }`}
      onClick={onClick}
    >
      {label}
    </NavLink>
  );
};

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home", href: "/" },
    { id: "about", label: "About", href: "/about" },
    { id: "projects", label: "Projects", href: "/projects" },
    { id: "contact", label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-secondary w-full py-8 px-8 md:px-14 lg:px-25 fixed top-0 left-0 right-0 z-50 font-syne">
      <div className="flex items-center justify-between">
        <Link to={"/"}>
          <img src={logo} alt="logo" className="h-7 md:h-8 lg:h-8" />
        </Link>

        <div className="hidden md:flex items-center">
          {navItems.map((item) => (
            <NavItem key={item.id} href={item.href} label={item.label} />
          ))}
        </div>

        <Link to={"/"}>
          <button className="hidden md:block border border-primary text-primary cursor-pointer text-sm px-6 py-2 rounded-[100px] font-medium hover:bg-primary hover:text-secondary transition-colors">
            HIRE ME
          </button>
        </Link>

        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <IoClose className="h-7 w-7" />
          ) : (
            <IoMenu className="h-7 w-7" />
          )}
        </button>
      </div>
      <div
        className={`md:hidden absolute top-22 left-0 right-0 bg-secondary p-4 transition-all duration-300 ease-in-out transform ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-10 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-4">
          {navItems.map((item) => (
            <NavItem
              key={item.id}
              href={item.href}
              label={item.label}
              onClick={() => setIsMenuOpen(false)}
            />
          ))}
          <button
            className="border border-primary text-primary cursor-pointer text-sm px-6 py-2 rounded-[100px] font-medium hover:bg-primary hover:text-secondary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            HIRE ME
          </button>
        </div>
      </div>

      {/* {isMenuOpen && (
        <div className="md:hidden absolute top-22 left-0 right-0 bg-secondary p-4">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <NavItem
                key={item.id}
                href={item.href}
                label={item.label}
                onClick={() => setIsMenuOpen(false)}
              />
            ))}
            <button
              className="border border-primary text-primary cursor-pointer text-sm px-6 py-2 rounded-[100px] font-medium hover:bg-primary hover:text-secondary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              HIRE ME
            </button>
          </div>
        </div>
      )} */}
    </nav>
  );
};
