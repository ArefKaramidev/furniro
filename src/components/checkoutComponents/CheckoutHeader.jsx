const CheckoutHeader = () => {
  return (
    <>
      <header className="mb-8">
        <div className="relative flex items-center justify-center">
          <img src="/public/img/headershop.png" alt="" className="w-full" />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
            <span className="font-bold text-5xl">Checkout</span>
            <div className="flex items-center justify-center space-x-2 mt-4">
              <span className="font-medium">Home </span>
              <span className="font-medium text-xl"> {" > "} </span>
              <span className="font-normal"> Checkout</span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default CheckoutHeader;
