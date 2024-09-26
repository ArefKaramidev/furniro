import bg from "/img/scandinavian-interior-mockup-wall-decal-background 1.png";
import MiddleSection from "./MiddleSection";
import Slide from "./slide";
import FuniroFurnitureSection from "./FuniroFurnitureSection";
import HomeProduct from "./HomeProduct";

const Main = () => {
  return (
    <>
      <div className="relative">
        <img src={bg} alt="" className="w-full h-full mb-10" />
        <div className="bg-seconday w-full h-full top-44 right-10 p-10 xl:absolute xl:w-[693px] xl:h-[443px]">
          <span className="font-bold text-lg tracking-[5px] block mt-8">
            New Arrival
          </span>
          <div className="w-96 lg:w-[24rem]">
            <span className="text-primary font-bold mb-10 text-5xl leading-tight">
              Discover Our New Collection
            </span>
          </div>
          <span className="text-lg font-medium block mb-12 w-80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, eum
            soluta? Quisquam quibusdam maiores tempora repudiandae?
          </span>
          <button className="px-16 py-6 bg-primary text-white font-bold">
            BUY NOW
          </button>
        </div>
      </div>
      <MiddleSection />
      <HomeProduct />
      <Slide />
      <FuniroFurnitureSection />
    </>
  );
};

export default Main;
