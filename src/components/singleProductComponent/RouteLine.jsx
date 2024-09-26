const RouteLine = () => {
  return (
    <>
      <div className="bg-seconday h-24 flex justify-start items-center px-10 lg:justify-between lg:px-32">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center gap-x-4">
            <span className="font-medium text-gray-400">Home</span>
            <span className="font-medium">{">"}</span>
            <span className="font-medium text-gray-400">Shop</span>
            <span className="font-medium">{">"}</span>
          </div>
          <div className="flex items-center gap-x-2">
            <div className="w-8 h-[2px] bg-gray-400 rotate-90"></div>
            <span className="font-medium">Asgaard sofa</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default RouteLine;
