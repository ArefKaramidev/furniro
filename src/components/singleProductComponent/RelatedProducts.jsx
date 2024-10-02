import { NavLink } from "react-router-dom";
import { productsData } from "../../data/productsData";
import share from "../../assets/icons/share.svg";
import compair from "../../assets/icons/compair.svg";
import likeProduct from "../../assets/icons/likeProduct.svg";
import { useContext, useEffect } from "react";
import { cartContext } from "../../context/cartContext";
const RelatedProducts = () => {
  const { addToCart } = useContext(cartContext);
  return (
    <>
      <div className="text-center">
        <span className="font-medium text-2xl">Related Products</span>
      </div>
      <div className="flex justify-center lg:container">
        <div className="grid grid-cols-1 grid-rows-2 mt-16 gap-10 md:grid-cols-2 xl:grid-cols-4">
          {productsData.map((item) => (
            <NavLink
              to={`/shop/${item.id}`}
              key={item.id}
              className="relative group transition-all"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <div
                className="absolute z-20 bg-transparent
               flex flex-col w-full h-full items-center transition-all justify-center opacity-0 group-hover:opacity-65 bg-neutral-600"
              />
              <div className="absolute w-full h-full flex justify-center items-center flex-col opacity-0 group-hover:opacity-100">
                <div className="flex flex-col items-center justify-center z-50 w-full h-full">
                  <button
                    className="bg-seconday text-primary px-12 py-3  duration-150 active:scale-90"
                    onClick={() => {
                      addToCart(item);
                      window.scrollTo(0, 0);
                    }}
                  >
                    Add to cart
                  </button>
                  <div className="flex flex-wrap justify-center items-center mt-4">
                    <img src={share} alt="share" width={10} height={10} />
                    <img
                      src={compair}
                      alt="compaire"
                      className="px-4"
                      width={10}
                      height={10}
                    />
                    <img
                      src={likeProduct}
                      alt="likeProduct"
                      width={10}
                      height={10}
                    />
                  </div>
                </div>
              </div>
              <div>
                <img
                  src={item.image}
                  alt={item.title}
                  width={200}
                  height={100}
                />
                <div className="flex flex-col items-start justify-between bg-[#F4F5F7] p-3 ">
                  <span className="font-bold text-xl">{item.title}</span>
                  <span className="text-[#B0B0B0]">{item.des}</span>
                  <div>
                    <span className="font-bold text-xl">{item.price} </span>
                    <span className="ml-2 line-through text-[#B0B0B0]">
                      {item.price.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
      <div className="text-center my-12 ">
        <button className="bg-white  border-primary px-24 border-2 py-3 text-primary">
          Show More
        </button>
      </div>
    </>
  );
};

export default RelatedProducts;
