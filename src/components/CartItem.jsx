import { useContext } from "react";
import remove from "../assets/icons/remove.svg";
import { cartContext } from "../context/cartContext";

const CartItem = () => {
  const { cartData, removeCartItem } = useContext(cartContext);

  return (
    <>
      {cartData.map((item) => (
        <div key={item.id} className="flex items-center justify-between px-10">
          <img
            src={item.image}
            alt=""
            className="w-20 h-20 rounded-md"
            width={800}
            height={350}
          />
          <div className="flex flex-col">
            <span>{item.title}</span>
            <div className="flex items-center gap-x-4">
              <span>{item.count} x</span>
              <span className="font-medium text-primary">{item.price}</span>
            </div>
          </div>
          <button onClick={() => removeCartItem(item.id)}>
            <img
              src={remove}
              alt=""
              width={20}
              height={20}
              className="w-full"
            />
          </button>
        </div>
      ))}
    </>
  );
};

export default CartItem;
