import { NavLink } from "react-router-dom";
import trash from "../../assets/icons/trash.svg";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import ShowTotal from "./ShowTotal";

const MainCart = () => {
  const { cartData, getTotal, removeCartItem } = useContext(cartContext);

  return (
    <>
      <div className="flex flex-col w-full items-center my-20 xl:flex-row xl:justify-evenly lg:px-20">
        <div className="overflow-x-auto w-full mb-10 lg:overflow-x-auto lg:mb-0">
          <table
            border={0}
            className="min-w-[800px] text-left mt-5 border-spacing-y-8 border-separate space-y-5 w-full"
          >
            <thead>
              <tr>
                <th className="w-20 "></th>
                <th className="w-20 ">Product</th>
                <th className="w-20 ">Price</th>
                <th className="w-20 ">Quantity</th>
                <th className="w-20 ">Subtotal</th>
                <th className="w-20 "></th>
              </tr>
            </thead>
            <tbody>
              {cartData.map((item) => (
                <tr key={item.id}>
                  <td className="w-20">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-32 h-32 rounded-md"
                      width={200}
                      height={200}
                    />
                  </td>
                  <td className="font-medium text-gray-400  ">{item.title}</td>
                  <td className="text-gray-400 font-normal  ">
                    Rs. {item.price}
                  </td>
                  <td className="w-20">
                    <input
                      type="text"
                      value={item.count}
                      className="text-center border border-gray-400 rounded-md w-10 h-10 py-2"
                    />
                  </td>
                  <td className="w-20">Rs .{item.price}</td>
                  <td className="w-20">
                    <button
                      onClick={() => {
                        removeCartItem(item.id);
                      }}
                    >
                      <img
                        src={trash}
                        alt="remove from cart"
                        className="w-full"
                        width={20}
                        height={20}
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ShowTotal getTotal={getTotal()} />
      </div>
    </>
  );
};

export default MainCart;
