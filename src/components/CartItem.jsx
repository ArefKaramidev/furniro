import remove from "../assets/icons/remove.svg";
import useCart from "../hooks/useCart";

const CartItem = () => {
  const { cartData, removeCartItem } = useCart();

  return (
    <>
      {cartData.map((item) => (
        <div key={item.id} className="flex items-center gap-x-12 px-10">
          <img src={item.image} alt="" className="w-20 h-20 rounded-md" />
          <div className="flex flex-col">
            <span>{item.title}</span>
            <div className="flex items-center gap-x-4">
              <span>{item.count} x</span>
              <span className="font-medium text-primary">{item.price}</span>
            </div>
          </div>
          <button onClick={() => removeCartItem(item.id)}>
            <img src={remove} alt="" />
          </button>
        </div>
      ))}
    </>
  );
};

export default CartItem;
