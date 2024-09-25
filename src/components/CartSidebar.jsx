import { NavLink } from "react-router-dom";
import CartItem from "./CartItem";
import useCart from "../hooks/useCart";
import { useContext } from "react";

const CartSidebar = ({ openCart }) => {
  return (
    <>
      <div className="absolute bg-white top-0 right-0 px-5 py-2 z-10">
        <div className="px-4 py-5 border-b-2 w-72">
          <span className="font-medium text-2xl">Shopping Cart</span>
        </div>

        <div>
          <div className="flex flex-col gap-y-5 py-4">
            {openCart ? <CartItem /> : console.log("noo")}
          </div>
          <div className="flex items-center justify-evenly py-5">
            <span className="font-medium">Subtotal</span>
            <span className="text-primary font-medium text-xl">{}</span>
          </div>
        </div>

        <div className="h-[1px] bg-gray-400"></div>

        <div className="flex items-center justify-evenly py-7 gap-x-2">
          <NavLink
            to={"/cart"}
            className="bg-white rounded-full px-8 py-1 border-black border-2 hover:bg-black hover:text-white active:scale-75 duration-150"
          >
            Cart
          </NavLink>
          <NavLink
            to={"/checkout"}
            className="bg-white rounded-full px-8 py-1 border-black border-2 hover:bg-black hover:text-white active:scale-75 duration-150"
          >
            Checkout
          </NavLink>
          <NavLink className="bg-white rounded-full px-8 py-1 border-black border-2 hover:bg-black hover:text-white active:scale-75 duration-150">
            Comparison
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default CartSidebar;
