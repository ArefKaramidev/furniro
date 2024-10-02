import { useParams } from "react-router";
import { productsData } from "../../data/productsData";
import { useCallback, useEffect, useMemo, useState } from "react";

import first from "/public/img/img1.webp";
import second from "/public/img/img2.webp";
import third from "/public/img/img3.webp";
import fourth from "/public/img/img4.webp";
import Slider from "./Slide";
import { Helmet } from "react-helmet";
import Order from "./Order";

const ProductDetail = () => {
  const preloadImage = useCallback((src) => {
    const img = new Image();
    img.src = src;
  }, []);

  useEffect(() => {
    [first, second, third, fourth].forEach((src) => preloadImage(src));
  }, [preloadImage]);

  const [focus, setFocus] = useState(null);
  const [slide, setSlide] = useState(fourth);

  return (
    <>
      <Helmet>
        <link rel="prefetch" href={first} as="image" />
        <link rel="prefetch" href={second} as="image" />
        <link rel="prefetch" href={third} as="image" />
        <link rel="prefetch" href={fourth} as="image" />
      </Helmet>

      <div className="flex flex-col justify-evenly w-full px-10 mt-10 items-center gap-y-20 lg:flex-row lg:items-start lg:px-0">
        {useMemo(() => {
          return (
            <div className="flex flex-col-reverse items-center  lg:space-x-10 lg:flex-row lg:items-start">
              <div className="flex items-center justify-center gap-x-4 mt-10 lg:mt-0 lg:flex-col lg:space-y-10 lg:items-start">
                <Slider
                  src={first}
                  setFocus={setFocus}
                  setSlide={setSlide}
                  focus={focus}
                />
                <Slider
                  src={second}
                  setFocus={setFocus}
                  setSlide={setSlide}
                  focus={focus}
                />
                <Slider
                  src={third}
                  setFocus={setFocus}
                  setSlide={setSlide}
                  focus={focus}
                />
                <Slider
                  src={fourth}
                  setFocus={setFocus}
                  setSlide={setSlide}
                  focus={focus}
                />
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

        <Order />
      </div>

      <hr className="my-20 h-[2px] bg-gray-300" />
    </>
  );
};

export default ProductDetail;
