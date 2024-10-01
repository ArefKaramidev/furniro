import { useParams } from "react-router";
import { productsData } from "../../data/productsData";
import { NavLink } from "react-router-dom";
import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import stars from "../../assets/icons/stars..svg";
import facebook from "../../assets/icons/facebook.svg";
import linkedIn from "../../assets/icons/linkedin.svg";
import twitter from "../../assets/icons/twitter.svg";
import { cartContext } from "../../context/cartContext";
import first from "/public/img/img1.jpg";
import second from "/public/img/img2.jpg";
import third from "/public/img/img3.jpg";
import fourth from "/public/img/img4.jpg";
import fivth from "/public/img/shop5.png";
import Slider from "./Slide";
import { Helmet } from "react-helmet";

const ProductDetail = () => {
  const preloadImage = useCallback((src) => {
    const img = new Image();
    img.src = src;
  }, []);

  useEffect(() => {
    [first, second, third, fourth, fivth].forEach((src) => preloadImage(src));
  }, [preloadImage]);

  const inputCount = useRef();
  const [count, setCount] = useState(1);
  const [focus, setFocus] = useState(null);
  const param = useParams().productId;
  const product = productsData.find((item) => item.id == param);
  const { addToCart } = useContext(cartContext);
  const [slide, setSlide] = useState(fivth);

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

  const handleInputChange = useCallback((e) => {
    const value = e.target.value;
    if (value < 1) {
      e.target.value = 1;
    }
  }, []);

  return (
    <>
      <Helmet>
        <link rel="prefetch" href={first} as="image" />
        <link rel="prefetch" href={second} as="image" />
        <link rel="prefetch" href={third} as="image" />
        <link rel="prefetch" href={fourth} as="image" />
      </Helmet>
      ;
      <div className="flex flex-col justify-evenly w-full px-10 mt-10 items-center gap-y-20 lg:flex-row lg:items-start lg:px-0">
        {useMemo(() => {
          return (
            <div className="flex flex-col-reverse items-center  lg:space-x-10 lg:flex-row lg:items-start">
              <div className="flex items-center justify-center gap-x-4 mt-10 lg:mt-0 lg:flex-col lg:space-y-10 lg:items-start">
                <Slider src={first} setFocus={setFocus} setSlide={setSlide} />
                <Slider src={second} setFocus={setFocus} setSlide={setSlide} />
                <Slider src={third} setFocus={setFocus} setSlide={setSlide} />
                <Slider src={fourth} setFocus={setFocus} setSlide={setSlide} />
              </div>
              {slide && (
                <div>
                  <img
                    src={slide}
                    loading="lazy"
                    alt="five product image"
                    className="w-[26rem] h-[20rem] rounded-md xl:w-[35rem] xl:h-[24rem]"
                    width={400}
                    height={400}
                  />
                </div>
              )}
            </div>
          );
        }, [slide])}
        {/* --------------------- */}

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
