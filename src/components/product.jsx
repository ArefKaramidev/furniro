import { productsData } from "../data/productsData";

const Product = () => {
  return (
    <>
      <img src="../assets/icons/compare.svg" alt="" />
      <div className="text-center mt-24">
        <span className="font-bold text-4xl">Our Product</span>
      </div>
      <div className="flex justify-center container">
        <div className="grid grid-cols-1 grid-rows-4 mt-16 gap-10 md:grid-cols-2 xl:grid-cols-4">
          {productsData.map((item) => (
            <div key={item.id} className="relative">
              <div className="bg-gray-500  absolute top-0 left-0 z-10 w-full h-full opacity-0 duration-300 flex flex-col items-center justify-center hover:opacity-65">
                <button className="bg-seconday text-primary px-12 py-3 opacity-">
                  Add to cart
                </button>
                <div className="flex flex-wrap justify-center items-center mt-4">
                  <img src="/public/img/likeProduct.png" alt="" />
                  <img src="/public/img/compare.png" alt="" className="px-4" />
                  <img src="/public/img/share.png" alt="" />
                </div>
              </div>
              <div>
                <img src={item.image} alt="" />
                <div className="flex flex-col items-start justify-between bg-[#F4F5F7] p-3">
                  <span className="font-bold text-xl">{item.title}</span>
                  <span className="text-[#B0B0B0]">{item.des}</span>
                  <div>
                    <span className="font-bold text-xl">{item.price} </span>
                    <span className="ml-2 line-through text-[#B0B0B0]">
                      {item.price}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-12">
        <button className="bg-white  border-primary px-24 border-2 py-3 text-primary">
          Show More
        </button>
      </div>
    </>
  );
};

export default Product;
