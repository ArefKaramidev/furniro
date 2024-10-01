import { useState } from "react";
import HeaderLinks from "./LinksHeader";
import close from "../assets/icons/remove.svg";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className="flex flex-col gap-y-1"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {isOpen ? (
          <img
            src={close}
            alt="close cart"
            width={10}
            height={10}
            className="w-full"
          />
        ) : (
          <>
            <div className="w-8 h-1 bg-black rounded-sm"></div>
            <div className="w-8 h-1 bg-black rounded-sm"></div>
            <div className="w-8 h-1 bg-black rounded-sm"></div>
          </>
        )}
      </div>

      {isOpen ? (
        <div className="fixed right-0 top-20 z-20 w-full backdrop-blur-md duration-500 rounded-tl-md rounded-bl-md lg:w-96">
          <HeaderLinks />
        </div>
      ) : (
        <div className="fixed -right-96 top-20 z-20 w-96 h-80 backdrop-blur-md duration-500"></div>
      )}
    </>
  );
};

export default HamburgerMenu;
