import { NavLink } from "react-router-dom";
import { useState } from "react";

import profile from "../assets/icons/profile.svg";
import cart from "../assets/icons/cart.svg";
import logo from "../assets/icons/logo.svg";
import CartSidebar from "./CartSidebar";
import closeCart from "../assets/icons/closeCart.svg";
import HamburgerMenu from "./HamburgerMenu";
import HeaderLinks from "./LinksHeader";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openCartSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex justify-between w-full h-20 items-center py-5 px-5 overflow-hidden lg:h-24 lg:flex lg:px-16 lg:justify-between">
        <NavLink to={"/"}>
          <div className="flex items-center gap-x-4">
            <img
              src={logo}
              alt="furniro logo"
              width={56}
              height={56}
              className="w-14"
            />

            <span className="font-bold text-3xl hidden lg:inline-block">
              Furniro
            </span>
          </div>
        </NavLink>
        <div className="hidden lg:flex">
          <HeaderLinks />
        </div>
        <div className="flex items-center gap-x-5 lg:gap-x-10">
          <img
            src={profile}
            alt="profile"
            className="w-5 xl:w-8"
            width={20}
            height={20}
          />
          <button
            className="relative z-20"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <img
              src={isOpen ? closeCart : cart}
              alt="cart logo"
              className="w-5 xl:w-7"
              width={20}
              height={20}
            />
          </button>
          <div className="lg:hidden">
            <HamburgerMenu />
          </div>
        </div>
      </div>
      {isOpen && <CartSidebar openCart={isOpen} />}
    </>
  );
};

export default Navbar;
