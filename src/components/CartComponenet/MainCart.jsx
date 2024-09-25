import { NavLink } from "react-router-dom";
import useCart from "../../hooks/useCart";
import trash from "../../assets/icons/trash.svg";

const MainCart = () => {
  const { cartData, removeCartItem, totalPrice } = useCart();
  const price = totalPrice();
  return (
    <>
      <div className="flex items-start justify-around my-20">
        <div>
          <table
            border={0}
            className="text-left mt-5 border-spacing-y-8 border-separate border-spacing-x-20"
          >
            <thead>
              <tr>
                <th></th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
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
                  <td className="font-medium text-gray-400">{item.title}</td>
                  <td className="text-gray-400 font-normal">
                    Rs. {item.price}
                  </td>
                  <td>
                    <input
                      type="text"
                      value={item.count}
                      className="text-center border border-gray-400 rounded-md w-10 h-10 py-2"
                    />
                  </td>
                  <td>Rs .{item.count * item.price}</td>
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

        <div className="bg-seconday py-10 text-center space-y-5 px-20">
          <span className="font-bold text-2xl">Cart Totals</span>
          <div className="flex items-center justify-evenly gap-x-14">
            <span className="font-medium">Subtotal</span>
            <span className="font-medium">price</span>
          </div>
          <div className="flex items-center justify-evenly gap-x-14">
            <span className="font-medium">Total</span>
            <span className="font-medium text-primary">Rs . {price}</span>
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
