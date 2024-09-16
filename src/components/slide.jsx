import select from "../assets/icons/select.svg";

const Slide = () => {
  return (
    <>
      <div className=" flex items-center justify-evenly mt-36 bg-seconday p-20">
        <div className="flex flex-col items-start justify-between">
          <span className="font-bold text-4xl">
            50+ Beautiful rooms <br />
            inspiration
          </span>
          <span className="text-gray-600 font-medium py-4">
            Our designer already made a lot of beautiful
            <br /> prototipe of rooms that inspire you
          </span>
          <button className="px-8 py-2 bg-primary text-white font-medium">
            Explore More
          </button>
        </div>
        <div className=" flex items-center relative z-10">
          <img src="/public/img/slide1.png" alt="" />
          <div className=" flex items-center absolute bottom-0 right-56">
            <div>
              <img src={select} alt="" />
            </div>
            <div className="w-3 h-3 rounded-full bg-gray-300 ml-3 "></div>
            <div className="w-3 h-3 rounded-full bg-gray-300 ml-3 "></div>
            <div className="w-3 h-3 rounded-full bg-gray-300 ml-3 "></div>
          </div>
          <img src="/public/img/slide2.png" alt="" className="px-4" />
          <img src="/public/img/slide3.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Slide;
