import { useContext } from "react";
import { cartContext } from "../../context/cartContext";

const TotalItem = () => {
  const { getTotal } = useContext(cartContext);

  return (
    <div className="flex items-center justify-evenly py-5">
      <span className="font-medium">Subtotal</span>
      <span className="text-primary font-medium text-xl">
        {getTotal().toLocaleString()}
      </span>
    </div>
  );
};

export default TotalItem;
