import checkout from "/public/img/headershop.png";

const CheckoutHeader = () => {
  return (
    <>
      <header className="mb-8">
        <div className="relative flex items-center justify-center">
          <img
            src={checkout}
            alt="check out header"
            className="w-full"
            width={1440}
            height={328}
            loading="eager"
          />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
            <span className="font-bold text-3xl lg:text-5xl">Checkout</span>
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
