import { useParams } from "react-router";
import { productsData } from "../../data/productsData";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import stars from "../../assets/icons/stars..svg";
import facebook from "../../assets/icons/facebook.svg";
import linkedIn from "../../assets/icons/linkedin.svg";
import twitter from "../../assets/icons/twitter.svg";
import useCart from "../../hooks/useCart";

const ProductDetail = () => {
  const [count, setCount] = useState(1);
  const param = useParams().productId;
  const product = productsData.find((item) => item.id == param);
  const { addToCart } = useCart();

  const plusCount = (obj) => {
    setCount(count + 1);
    addToCart(obj);
  };

  return (
    <>
      <div className="flex justify-evenly mt-10">
        <div className="flex items-start">
          <div className=" space-y-10">
            <img src="/public/img/shop2.png" alt="" />
            <img src="/public/img/shop3.png" alt="" />
            <img src="/public/img/shop4.png" alt="" />
            <img src="/public/img/shop.png" alt="" />
          </div>
          <div>
            <img src="/public/img/shop5.png" alt="" />
          </div>

          {/* --------------------- */}
        </div>
        <div className="flex flex-col gap-5">
          <span className="text-4xl font-medium">{product.title}</span>
          <span className="text-3xl font-medium text-gray-400">
            {product.price}
          </span>
          <div className=" flex items-center gap-x-8">
            <img src={stars} alt="" />
            <div className="w-8 h-[2px] bg-gray-400 rotate-90"></div>
            <span className="text-gray-300">5 Customer Review</span>
          </div>
          <p className="text-justify w-[30rem] text-sm font-medium">
            {product.des}
          </p>

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
          {/*  */}
          <div className="flex flex-col gap-y-2">
            <span className="text-gray-300">Color</span>
            <div className="flex items-center gap-x-2">
              <div className="p-4 bg-primary rounded-full font-medium text-white"></div>
              <div className="p-4 bg-black rounded-full font-medium"></div>
              <div className="p-4 bg-purple-600 rounded-full font-medium"></div>
            </div>
          </div>

          <div className="flex items-center gap-x-3 border-b pb-20">
            <div className="flex items-center justify-between border-2 rounded-xl w-32">
              <button
                className="py-4 px-4 rounded-tl-md rounded-bl-md"
                onClick={() => setCount(count - 1)}
              >
                -
              </button>
              <span className="font-medium text-xl">{count}</span>
              <button
                className="px-4 py-4 rounded-tr-md rounded-br-md"
                onClick={() => {
                  plusCount(product);
                }}
              >
                +
              </button>
            </div>
            <button
              className="px-16 py-4 border-black border rounded-xl font-medium text-xl hover:bg-black hover:text-white active:scale-95 duration-150"
              onClick={() => addToCart(product)}
            >
              Add To Cart
            </button>
            <NavLink className="px-16 py-4 border-black border rounded-xl font-medium text-xl hover:bg-black hover:text-white active:scale-95 duration-150">
              + Compare
            </NavLink>
          </div>
          <div className="flex gap-x-16 mt-10">
            <div className="flex flex-col gap-y-4">
              <span className="text-gray-400">SKU</span>
              <span className="text-gray-400">Category</span>
              <span className="text-gray-400">Tags</span>
              <span className="text-gray-400">Share</span>
            </div>

            <div className="flex flex-col gap-y-4">
              <span className="text-gray-400">:SS001</span>
              <span className="text-gray-400">:Sofas</span>
              <span className="text-gray-400">:Sofa, Chair, Home, Shop</span>
              <div className="flex items-center gap-x-2 mt-1">
                <img src={facebook} alt="" className="w-5 h-5" />
                <img src={linkedIn} alt="" className="w-5 h-5" />
                <img src={twitter} alt="" className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="my-20 h-[2px] bg-gray-300" />
    </>
  );
};

export default ProductDetail;
