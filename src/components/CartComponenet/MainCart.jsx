const MainCart = () => {
  return (
    <>
      <div className="flex items-start justify-around my-20">
        <div className="flex items-center bg-seconday p-5 gap-x-48">
          <span className=" font-medium text-xl">Product</span>
          <span className=" font-medium text-xl">Price</span>
          <span className=" font-medium text-xl">Quantity</span>
          <span className=" font-medium text-xl">Subtotal</span>
        </div>
        <div className="bg-seconday py-10 text-center space-y-5 px-20">
          <span className="font-bold text-2xl">Cart Totals</span>
          <div className="flex items-center justify-evenly gap-x-14">
            <span className="font-medium">Sabtotal</span>
            <span className="font-medium">price</span>
          </div>
          <div className="flex items-center justify-evenly gap-x-14">
            <span className="font-medium">Total</span>
            <span className="font-medium text-primary">price</span>
          </div>
          <div>
            <button className="text-xl border border-black px-14 py-2 rounded-xl">
              Check Out
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainCart;
