import { useParams } from "react-router";
import { productsData } from "../../data/productsData";
import { NavLink } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import stars from "../../assets/icons/stars..svg";
import facebook from "../../assets/icons/facebook.svg";
import linkedIn from "../../assets/icons/linkedin.svg";
import twitter from "../../assets/icons/twitter.svg";
import { cartContext } from "../../context/cartContext";
import first from "/public/img/gray-sofa-white-living-room-interior-with-copy-space-3d-rendering.jpg";
import second from "/public/img/pink-sofa-white-living-room-with-copy-space.jpg";
import third from "/public/img/wood-sideboard-living-room-interior-with-copy-space.jpg";
import four from "/public/img/wood-sideboard-living-room-interior-with-copy-space (1).jpg";
import five from "/public/img/shop5.png";
import Slide from "../slide";

const ProductDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const inputCount = useRef();
  const [count, setCount] = useState(0);
  const [focus, setFocus] = useState(null);
  const param = useParams().productId;
  const product = productsData.find((item) => item.id == param);
  const { addToCart } = useContext(cartContext);
  const [slide, setSlide] = useState(five);

  const addProductHandler = (obj) => {
    if (inputCount.current.value == 1) {
      obj.count += 1;
      addToCart(obj);
    } else {
      obj.count = +inputCount.current.value;
      addToCart(obj);
    }
    inputCount.current.value = 1;
  };
  const focusStyle = (img) => {
    setFocus(img);
  };
  return (
    <>
      <div className="flex flex-col justify-evenly w-full px-10 mt-10 items-center gap-y-20 lg:flex-row lg:items-start lg:px-0">
        <div className="flex flex-col-reverse items-center lg:space-x-10 lg:flex-row lg:items-start">
          <div className="flex items-center justify-center gap-x-4 mt-10 lg:mt-0 lg:flex-col lg:space-y-10 lg:items-start">
            <img
              loading="lazy"
              src={first}
              alt="first product image"
              width={50}
              height={50}
              className="w-20 h-20 rounded-md cursor-pointer"
              onClick={() => {
                setSlide(first);
                focusStyle(first);
              }}
              style={{
                border: focus === first ? "solid 2px #B88E2F" : "none",
              }}
            />

            <img
              loading="lazy"
              src={second}
              alt="second product image"
              width={50}
              height={50}
              className="w-20 h-20 rounded-md cursor-pointer"
              onClick={() => {
                setSlide(second);
                focusStyle(second);
              }}
              style={{
                border: focus === second ? "solid 2px #B88E2F" : "none",
              }}
            />

            <img
              loading="lazy"
              src={third}
              alt="third product image"
              width={50}
              height={50}
              className="w-20 h-20 rounded-md cursor-pointer"
              onClick={() => {
                setSlide(third);
                focusStyle(third);
              }}
              style={{
                border: focus === third ? "solid 2px #B88E2F" : "none",
              }}
            />

            <img
              loading="lazy"
              src={four}
              alt="four product image"
              width={50}
              height={50}
              className="w-20 h-20 rounded-md cursor-pointer"
              onClick={() => {
                setSlide(four);
                focusStyle(four);
              }}
              style={{
                border: focus === four ? "solid 2px #B88E2F" : "none",
              }}
            />
          </div>
          {slide && (
            <div>
              <img
                src={slide}
                alt="five product image"
                className="w-[26rem] h-[20rem] rounded-md xl:w-[35rem] xl:h-[24rem]"
                width={400}
                height={400}
              />
            </div>
          )}

          {/* --------------------- */}
        </div>

        <div className="flex flex-col gap-5 items-center lg:items-start">
          <span className="text-4xl font-medium">{product.title}</span>
          <span className="text-3xl font-medium text-gray-400">
            {product.price}
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
          {/*  */}
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
                className="py-4 px-4 rounded-tl-md rounded-bl-md"
                onClick={() => setCount(count - 1)}
              >
                -
              </button>
              <input
                type="text"
                className="font-medium text-xl border-none outline-none bg-transparent w-10 text-center"
                ref={inputCount}
                defaultValue={count}
                min={1}
                max={50}
              />
              <button
                className="px-4 py-4 rounded-tr-md rounded-br-md"
                onClick={() => {
                  setCount(count + 1);
                }}
              >
                +
              </button>
            </div>
            <button
              type="reset"
              className="px-16 py-4 border-black border rounded-xl font-medium text-xl hover:bg-black hover:text-white active:scale-95 duration-150"
              onClick={() => addProductHandler(product)}
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
                <img
                  src={facebook}
                  alt="facebook logo"
                  className="w-5 h-5"
                  width={10}
                  height={10}
                />
                <img
                  src={linkedIn}
                  alt="linkedIn logo"
                  className="w-5 h-5"
                  width={10}
                  height={10}
                />
                <img
                  src={twitter}
                  alt="twitter logo"
                  className="w-5 h-5"
                  width={10}
                  height={10}
                />
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
