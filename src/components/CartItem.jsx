import { useContext, useMemo } from "react";
import remove from "../assets/icons/remove.svg";
import { cartContext } from "../context/cartContext";

const CartItem = () => {
  const { cartData, removeCartItem } = useContext(cartContext);

  const cartItems = useMemo(() => {
    return cartData.map((item) => (
      <div key={item.id} className="flex items-center justify-between px-10">
        <img
          src={item.image}
          alt="product image"
          className="w-20 h-20 rounded-md"
          width={800}
          height={350}
        />
        <div className="flex flex-col">
          <span>{item.title}</span>
          <div className="flex items-center gap-x-4">
            <span>{item.count} x</span>
            <span className="font-medium text-primary">
              {item.price.toLocaleString()}
            </span>
          </div>
        </div>
        <button onClick={() => removeCartItem(item.id)}>
          <img
            src={remove}
            alt="delete"
            width={20}
            height={20}
            className="w-full"
          />
        </button>
      </div>
    ));
  }, [cartData, removeCartItem]);

  return <>{cartItems}</>;
};

export default CartItem;
