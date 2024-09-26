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
            src="/public/img/goldun.png"
            alt=""
            className="col-span-1 inline-block"
          />
          <img
            src="/public/img/radio.png"
            alt=""
            className="col-start-2 place-self-center"
          />
          <img
            src="/public/img/desk.png"
            alt=""
            className="row-start-1 row-end-3 col-start-3 col-end-4 place-self-center  row-span-2"
          />

          <img
            src="/public/img/bedroom.png"
            alt=""
            className="col-start-4 col-end-5 place-self-end"
          />
          <img
            src="/public/img/desk2.png"
            alt=""
            className="col-start-5 col-end-6"
          />
          <img src="/public/img/chair.png" alt="" className="row-start-2" />
          <img src="/public/img/desk3.png" alt="" className="row-start-2 " />
          <img
            src="/public/img/tablo.png"
            alt=""
            className="col-start-4 col-end-5"
          />
          <img
            src="/public/img/kitchen.png"
            alt=""
            className="col-start-5 col-end-6"
          />
        </div>
      </div>
    </>
  );
};

export default FuniroFurnitureSection;
