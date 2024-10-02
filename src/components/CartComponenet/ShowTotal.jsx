import { memo } from "react";
import { NavLink } from "react-router-dom";

const ShowTotal = memo(({ getTotal }) => {
  return (
    <div className="bg-seconday py-10 text-center space-y-5 w-96 ">
      <span className="font-bold text-2xl">Cart Totals</span>
      <div className="flex items-center justify-evenly gap-x-14">
        <span className="font-medium">Subtotal</span>
        <span className="font-medium">price</span>
      </div>
      <div className="flex items-center justify-evenly gap-x-14">
        <span className="font-medium">Total</span>
        <span className="font-medium text-primary">Rs . {getTotal.toLocaleString()}</span>
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
  );
});

export default ShowTotal;
