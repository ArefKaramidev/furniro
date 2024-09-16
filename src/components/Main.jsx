import bg from "/img/scandinavian-interior-mockup-wall-decal-background 1.png";
import MiddleSection from "./MiddleSection";
import Product from "./product";

const Main = () => {
  return (
    <>
      <div className="relative">
        <img src={bg} alt="" className="w-full" />
        <div className="bg-seconday w-[693px] h-[443px] absolute top-44 right-10 p-10">
          <span className="font-bold text-lg tracking-[5px] block mt-8">
            New Arrival
          </span>
          <div className="w-[24rem]">
            <span className="text-primary font-bold mb-10 text-5xl leading-tight">
              Discover Our New Collection
            </span>
          </div>
          <span className="text-lg font-medium block mb-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, eum
            soluta? Quisquam quibusdam maiores tempora repudiandae?
          </span>
          <button className="px-16 py-6 bg-primary text-white font-bold">
            BUY NOW
          </button>
        </div>
      </div>
      <MiddleSection />
      <Product />
    </>
  );
};

export default Main;
