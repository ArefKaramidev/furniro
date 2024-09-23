import closeCart from "../assets/icons/closeCart.svg";

const CartSidebar = () => {
  return (
    <>
      <div className="relative bg-white top-0 right-0 px-5 py-2 inline-block">
        <div className="flex items-center justify-evenly px-4 py-5">
          <span className="font-medium text-2xl">Shopping Cart</span>
          <img src={closeCart} alt="" />
        </div>

        <div className="h-[2px] bg-gray-400"></div>

        <div className="flex items-center justify-evenly py-5">
          <span className="font-medium">Subtotal</span>
          <span className="text-primary font-medium text-xl">270000</span>
        </div>

        <div className="h-[2px] bg-gray-400"></div>

        <div className="flex items-center justify-evenly py-7 gap-x-2">
          <button className="bg-white rounded-full px-8 py-1 border-black border-2">
            Cart
          </button>
          <button className="bg-white rounded-full px-8 py-1 border-black border-2">
            Checkout
          </button>
          <button className="bg-white rounded-full px-8 py-1 border-black border-2">
            Comparison
          </button>
        </div>
      </div>
    </>
  );
};

export default CartSidebar;
