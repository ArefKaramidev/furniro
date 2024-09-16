import filter from "../../assets/icons/filter.svg";
import menu from "../../assets/icons/menu.svg";
import list from "../../assets/icons/list.svg";

const HeaderShop = () => {
  return (
    <>
      <header className="mb-8">
        <div className="relative flex items-center justify-center">
          <img src="/public/img/headershop.png" alt="" className="w-full" />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
            <span className="font-bold text-5xl">Shop</span>
            <div className="flex items-center justify-center space-x-2 mt-4">
              <span className="font-medium">Home </span>
              <span className="font-medium text-xl"> {" > "} </span>
              <span className="font-normal"> Shop</span>
            </div>
          </div>
        </div>
        <div className="bg-seconday h-24 flex justify-between items-center px-24">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center gap-x-4">
              <img src={filter} alt="" />
              <span className="font-medium">Filter</span>
              <img src={menu} alt="" />
              <img src={list} alt="" />
            </div>
            <div className="flex items-center gap-x-2">
              <div className="w-8 h-[2px] bg-gray-400 rotate-90"></div>
              <span className="font-medium">Showing 1–16 of 32 results</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-x-5">
            <div>
              <span className="font-medium">Show </span>
              <input
                type="text"
                className="outline-none border-none w-12 h-12 placeholder:text-center text-center"
                placeholder="16"
              />
            </div>
            <div>
              <span className="font-medium">Sort by </span>
              <input
                type="text"
                className="outline-none border-none w-40 h-10 placeholder:text-center text-center"
                placeholder="Default"
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderShop;
