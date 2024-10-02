import { NavLink } from "react-router-dom";
import CartItem from "./CartItem";
import { memo, useContext, useMemo } from "react";
import { cartContext } from "../context/cartContext";

const CartSidebar = ({ openCart }) => {
  const { getTotal, cartData } = useContext(cartContext);
  const totalPrice = useMemo(() => getTotal(), [cartData]);

  return (
    <>
      <div className="absolute bg-white top-0 right-0 px-5 py-2 z-10 w-full lg:w-[28rem] lg:gap-x-4">
        <div className="px-4 py-5 border-b-2 w-72">
          <span className="font-medium text-2xl">Shopping Cart</span>
        </div>

        <div>
          <div className="flex flex-col gap-y-5 py-4">
            {useMemo(
              () => (
                <CartItem />
              ),
              [openCart]
            )}
          </div>
          <div className="flex items-center justify-evenly py-5">
            <span className="font-medium">Subtotal</span>
            <span className="text-primary font-medium text-xl">
              {totalPrice.toLocaleString()}
            </span>
          </div>
        </div>

        <div className="h-[1px] bg-gray-400"></div>

        <div className="flex flex-col items-center justify-evenly py-7 gap-y-5 gap-x-2 lg:flex-row">
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
