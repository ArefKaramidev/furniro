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
      <div className="flex  justify-between items-center py-5 px-5 overflow-hidden lg:flex lg:px-16 lg:justify-between">
        <div className="flex items-center gap-x-4">
          <NavLink to={"/"}>
            <img src={logo} alt="" width={50} height={50} className="w-full" />
          </NavLink>
          <span className="font-bold text-3xl hidden lg:inline-block">
            Furniro
          </span>
        </div>
        <div className="hidden lg:flex">
          <HeaderLinks />
        </div>
        <div className="flex items-center gap-x-5 lg:gap-x-10">
          <img src={profile} alt="" className="w-8" width={10} height={10} />
          <button
            className="relative z-20"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <img
              src={isOpen ? closeCart : cart}
              alt=""
              className="w-full"
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
