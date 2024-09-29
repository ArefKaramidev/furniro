import select from "../assets/icons/select.svg";
import slide1 from "/public/img/slide1.png";
import slide2 from "/public/img/slide2.png";
import slide3 from "/public/img/slide3.png";
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
          <img
            src={slide1}
            alt="image slide 1"
            className="hidden lg:inline-block w-full"
            width={100}
            height={300}
          />
          <div className="hidden items-center absolute bottom-0 right-56 lg:flex">
            <div>
              <img
                src={select}
                alt="selected slide"
                className="hidden lg:inline-block w-full"
                width={20}
                height={20}
              />
            </div>
            <div className="w-3 h-3 rounded-full bg-gray-300 ml-3 "></div>
            <div className="w-3 h-3 rounded-full bg-gray-300 ml-3 "></div>
            <div className="w-3 h-3 rounded-full bg-gray-300 ml-3 "></div>
          </div>
          <img
            src={slide2}
            alt="image slide 2"
            className="hidden lg:inline-block px-4 w-full"
            width={100}
            height={300}
          />
          <img
            src={slide3}
            alt="image slide 3"
            className="hidden lg:inline-block w-full"
            width={100}
            height={300}
          />
        </div>
      </div>
    </>
  );
};

export default Slide;
