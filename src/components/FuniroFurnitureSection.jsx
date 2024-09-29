import goldun from "/public/img/goldun.png";
import radio from "/public/img/radio.png";
import bedroom from "/public/img/bedroom.png";
import desk2 from "/public/img/desk2.png";
import tablo from "/public/img/tablo.png";
import kitchen from "/public/img/kitchen.png";
import desk from "/public/img/desk.png";
import chair from "/public/img/chair.png";
import desk3 from "/public/img/desk3.png";

const FuniroFurnitureSection = () => {
  return (
    <>
      <div className="mt-20 flex flex-col items-center justify-between">
        <div className="flex flex-col items-center justify-between">
          <span className="font-medium text-gray-500">
            Share your setup with
          </span>
          <span className="font-bold text-4xl">#FuniroFurniture</span>
        </div>

        <div className="grid grid-cols-2 mt-10 grid-rows-2 gap-y-5 gap-x-4  place-content-stretch lg:grid-cols-5 lg:container">
          <img
            src={goldun}
            alt=""
            className="col-span-1 inline-block"
            width={100}
            height={200}
          />
          <img
            src={radio}
            alt=""
            className="col-start-2 place-self-center w-full"
            width={100}
            height={200}
          />
          <img
            src={desk}
            alt=""
            className="row-start-1 row-end-3 col-start-3 col-end-4 place-self-center  row-span-2 w-full"
          />

          <img
            src={bedroom}
            alt=""
            className="col-start-4 col-end-5 place-self-end w-full"
            width={100}
            height={200}
          />
          <img
            src={desk2}
            alt=""
            className="col-start-5 col-end-6 w-full"
            width={100}
            height={200}
          />
          <img
            src={chair}
            alt=""
            className="row-start-2 w-full"
            width={100}
            height={200}
          />
          <img
            src={desk3}
            alt=""
            className="row-start-2 w-full"
            width={100}
            height={200}
          />
          <img
            src={tablo}
            alt=""
            className="col-start-4 col-end-5 w-full"
            width={100}
            height={200}
          />
          <img
            src={kitchen}
            alt=""
            className="col-start-5 col-end-6 w-full"
            width={100}
            height={200}
          />
        </div>
      </div>
    </>
  );
};

export default FuniroFurnitureSection;
