import { NavLink } from "react-router-dom";
import trash from "../../assets/icons/trash.svg";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";

const MainCart = () => {
  const { cartData, getTotal, removeCartItem } = useContext(cartContext);

  return (
    <>
      <div className="flex flex-col w-full items-center my-20 xl:flex-row xl:justify-evenly">
        <div className="overflow-x-scroll w-full lg:overflow-x-hidden mb-10 lg:mb-0">
          <table
            border={0}
            className="text-left mt-5 border-spacing-y-8 border-separate space-y-5  overflow-x-scroll w-full xl:w-auto"
          >
            <thead>
              <tr>
                <th className="px-20"></th>
                <th className="px-20">Product</th>
                <th className="px-20">Price</th>
                <th className="px-20">Quantity</th>
                <th className="px-20">Subtotal</th>
                <th className="px-20"></th>
              </tr>
            </thead>
            <tbody>
              {cartData.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img
                      src={item.image}
                      alt=""
                      className="w-32 h-32 rounded-md"
                    />
                  </td>
                  <td className="font-medium text-gray-400 px-20">
                    {item.title}
                  </td>
                  <td className="text-gray-400 font-normal px-20">
                    Rs. {item.price}
                  </td>
                  <td className="px-20">
                    <input
                      type="text"
                      value={item.count}
                      className="text-center border border-gray-400 rounded-md w-10 h-10 py-2"
                    />
                  </td>
                  <td className="px-20">Rs .{item.price}</td>
                  <td>
                    <button
                      onClick={() => {
                        removeCartItem(item.id);
                      }}
                    >
                      <img src={trash} alt="" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-seconday py-10 text-center space-y-5 px-10 w-96">
          <span className="font-bold text-2xl">Cart Totals</span>
          <div className="flex items-center justify-evenly gap-x-14">
            <span className="font-medium">Subtotal</span>
            <span className="font-medium">price</span>
          </div>
          <div className="flex items-center justify-evenly gap-x-14">
            <span className="font-medium">Total</span>
            <span className="font-medium text-primary">Rs . {getTotal()}</span>
          </div>
          <div>
            <NavLink
              to={"/checkout"}
              className="text-xl border border-black px-14 py-2 rounded-xl hover:text-white hover:bg-black duration-150"
            >
              Check Out
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainCart;
