const Footer = () => {
  return (
    <footer className="container">
      <div className="w-full flex justify-center ">
        <div className="w-full h-[2px] bg-gray-300 mb-24 "></div>
      </div>
      <div className="flex items-start justify-evenly mb-32 ">
        <div className="flex flex-col items-start">
          <span className="font-bold text-3xl mb-24">Funiro.</span>
          <span className="font-normal text-lg text-gray-400">
            400 University Drive Suite 200 Coral
            <br /> Gables,
            <br /> FL 33134 USA
          </span>
        </div>

        <div className="flex flex-col">
          <span className="font-normal text-gray-400 mb-5">Links</span>
          <div className="flex flex-col">
            <span className="font-medium text-sm mt-5">Home</span>
            <span className="font-medium text-sm mt-5">Shop</span>
            <span className="font-medium text-sm mt-5">About</span>
            <span className="font-medium text-sm mt-5">Contact</span>
          </div>
        </div>

        <div className="flex flex-col">
          <span className="font-normal text-gray-400 mb-5">Help</span>
          <div className="flex flex-col">
            <span className="font-medium text-sm mt-5">Payment Options</span>
            <span className="font-medium text-sm mt-5">Returns</span>
            <span className="font-medium text-sm mt-5">Privacy Policies</span>
          </div>
        </div>

        <div className="flex flex-col">
          <span className="font-normal text-gray-400 mb-5">Newsletter</span>
          <div className="flex  mt-5">
            <input
              type="text"
              placeholder="Enter Your Email Address"
              className="border-b-2 mr-5 border-black"
            />
            <button className="border-b-2 border-black font-medium text-sm">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mb-10">
        <div className="w-full h-[2px] bg-gray-300"></div>
      </div>
      <div className="mb-10">
        <span className="font-medium text-black">
          2023 furino. All rights reverved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
