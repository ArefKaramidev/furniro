import { NavLink } from "react-router-dom";
import { links } from "../data/links";
import { useState } from "react";

import profile from "../assets/icons/profile.svg";
import serach from "../assets/icons/serach.svg";
import like from "../assets/icons/like.svg";
import cart from "../assets/icons/cart.svg";
import titleLogo from "../assets/icons/title.svg";
import CartSidebar from "./CartSidebar";
import closeCart from "../assets/icons/closeCart.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openCartSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex items-center justify-between py-5 px-16">
        <img src={titleLogo} alt="" />
        <div>
          {links.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={
                "px-10 font-medium text-lg duration-150 py-2"
              }
            >
              {item.title}
            </NavLink>
          ))}
        </div>
        <div className="flex items-center justify-evenly gap-x-10">
          <img src={profile} alt="" />
          <img src={serach} alt="" />
          <img src={like} alt="" />
          <button
            className="relative z-20"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <img src={isOpen ? closeCart : cart} alt="" />
          </button>
        </div>
      </div>
      {isOpen && <CartSidebar openCart={isOpen} />}
    </>
  );
};

export default Navbar;
