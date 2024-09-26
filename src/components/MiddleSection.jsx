const image1 = "/img/Mask Group (1).png";
const image2 = "/img/Image-living room.png";
const image3 = "/img//Mask Group (4).png";

const MiddleSection = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-16">
        <span className="font-bold text-2xl">Browse The Range</span>
        <span className="text-[#666666] px-10 text-center lg:px-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </span>

        <div className="flex items-center gap-x-5 mt-16">
          <div className=" text-center">
            <img src={image1} alt="" className="mb-4" />
            <span className=" font-medium text-2xl">Dining</span>
          </div>
          <div className=" text-center">
            <img src={image2} alt="" className="mb-4" />
            <span className=" font-medium text-2xl">Living</span>
          </div>
          <div className=" text-center">
            <img src={image3} alt="" className="mb-4" />
            <span className=" font-medium text-2xl">Bedroom</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MiddleSection;
