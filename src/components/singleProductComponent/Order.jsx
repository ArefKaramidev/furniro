import { useParams } from "react-router";
import stars from "../../assets/icons/stars..svg";
import { productsData } from "../../data/productsData";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { cartContext } from "../../context/cartContext";
import { NavLink } from "react-router-dom";
import AboutProduct from "./AboutProduct";
import CartItem from "../CartItem";
import CartSidebar from "../CartSidebar";

const Order = () => {
  const { addToCart } = useContext(cartContext);
  const param = useParams().productId;
  const inputCount = useRef();
  const [count, setCount] = useState(1);
  const product = productsData.find((item) => item.id == param);

  useEffect(() => {
    inputCount.current.value = count;
  }, [count]);

  const countHandler = useCallback((mode) => {
    setCount((prevCount) => {
      if (mode === "max") {
        return prevCount + 1;
      } else {
        return prevCount > 1 ? prevCount - 1 : prevCount;
      }
    });
  }, []);

  const handleInputChange = useCallback((e) => {
    const value = e.target.value;
    if (value < 1) {
      e.target.value = 1;
    }
  }, []);

  const addProductHandler = (obj) => {
    if (inputCount.current.value == 1) {
      obj.count = 1;
      addToCart(obj, 1);
      setCount(1);
    } else {
      obj.count = +inputCount.current.value;
      addToCart(obj, +inputCount.current.value);
    }
    setCount(1);
    inputCount.current.value = count;
  };

  return (
    <div className="flex flex-col gap-5 items-center lg:items-start">
      <span className="text-4xl font-medium">{product.title}</span>
      <span className="text-3xl font-medium text-gray-400">
        {product.price.toLocaleString()}
      </span>
      <div className="flex flex-col items-center lg:items-start gap-y-10">
        <div className=" flex items-center gap-x-8">
          <img
            src={stars}
            alt="stars"
            className="w-32"
            width={60}
            height={30}
          />
          <div className="w-8 h-[2px] bg-gray-400 rotate-90"></div>
          <span className="text-gray-300">5 Customer Review</span>
        </div>
        <p className="text-justify text-sm font-medium">{product.des}</p>
      </div>

      <div className="flex flex-col gap-y-2">
        <span className="text-gray-300">Size</span>
        <div className="flex items-center gap-x-2">
          <div className="p-2 bg-primary rounded-md font-medium text-white">
            L
          </div>
          <div className="p-2 bg-seconday rounded-md font-medium">XL</div>
          <div className="p-2 bg-seconday rounded-md font-medium">XS</div>
        </div>
      </div>

      <div className="flex flex-col gap-y-2">
        <span className="text-gray-300">Color</span>
        <div className="flex items-center gap-x-2">
          <div className="p-4 bg-primary rounded-full font-medium text-white"></div>
          <div className="p-4 bg-black rounded-full font-medium"></div>
          <div className="p-4 bg-purple-600 rounded-full font-medium"></div>
        </div>
      </div>

      <div className="flex flex-col gap-y-10 items-center gap-x-3 border-b pb-20 lg:flex-row lg:gap-y-00">
        <div className="flex items-center justify-between border-2 rounded-xl w-32">
          <button
            className="py-4 px-4 rounded-tl-md rounded-bl-md "
            onClick={() => countHandler("min")}
          >
            -
          </button>
          <input
            type="number"
            className="font-medium text-xl border-none outline-none bg-transparent left-1 w-10 text-center"
            ref={inputCount}
            defaultValue={count}
            pattern="/^-?\d+\.?\d*$/"
            onInput={handleInputChange}
            aria-label="count"
          />
          <button
            className="px-4 py-4 rounded-tr-md rounded-br-md"
            onClick={() => {
              countHandler("max");
            }}
          >
            +
          </button>
        </div>
        <button
          type="reset"
          className="px-16 py-4 border-black border rounded-xl font-medium text-xl hover:bg-black hover:text-white active:scale-95 duration-150"
          onClick={() => {
            addProductHandler(product);
          }}
        >
          Add To Cart
        </button>
        <NavLink className="px-16 py-4 border-black border rounded-xl font-medium text-xl hover:bg-black hover:text-white active:scale-95 duration-150">
          + Compare
        </NavLink>
      </div>
      <AboutProduct />
    </div>
  );
};

export default Order;
