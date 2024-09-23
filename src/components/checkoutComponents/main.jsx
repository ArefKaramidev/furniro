const CheckoutMain = () => {
  return (
    <>
      <div className="flex items-start justify-evenly mb-20">
        <form action="" className="flex flex-col gap-y-8">
          <span className="font-bold text-2xl inline-block mb-8">
            Billing details
          </span>
          <div className=" flex items-center gap-x-6 ">
            <div className="flex flex-col gap-y-4 ">
              <label htmlFor="" className="font-medium text-sm">
                First Name
              </label>
              <input
                type="text"
                className="w-36 py-4 rounded-md border-gray-400 border"
              />
            </div>
            <div className="flex flex-col gap-y-4 ">
              <label htmlFor="" className="font-medium text-sm">
                Last Name
              </label>
              <input
                type="text"
                className="w-36 py-4 rounded-md border-gray-400 border"
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <span className="font-medium text-sm">Company Name (Optional)</span>
            <input
              type="text"
              className="w-80 py-4 rounded-md border-gray-400 border"
            />
          </div>
          <div className="flex flex-col gap-y-4">
            <span className="font-medium text-sm">Country / Region</span>
            <input
              type="text"
              className="w-80 py-4 rounded-md border-gray-400 border px-4"
              placeholder="Sri Lanka"
            />
          </div>
          <div className="flex flex-col gap-y-4">
            <span className="font-medium text-sm">Street address</span>
            <input
              type="text"
              className="w-80 py-4 rounded-md border-gray-400 border px-4"
            />
          </div>
          <div className="flex flex-col gap-y-4">
            <span className="font-medium text-sm">Town / City</span>
            <input
              type="text"
              className="w-80 py-4 rounded-md border-gray-400 border px-4"
            />
          </div>
          <div className="flex flex-col gap-y-4">
            <span className="font-medium text-sm">Province</span>
            <input
              type="text"
              className="w-80 py-4 rounded-md border-gray-400 border px-4"
              placeholder="Western Province"
            />
          </div>
          <div className="flex flex-col gap-y-4">
            <span className="font-medium text-sm">ZIP code</span>
            <input
              type="text"
              className="w-80 py-4 rounded-md border-gray-400 border px-4"
            />
          </div>
          <div className="flex flex-col gap-y-4">
            <span className="font-medium text-sm">Phone</span>
            <input
              type="text"
              className="w-80 py-4 rounded-md border-gray-400 border px-4"
            />
          </div>
          <div className="flex flex-col gap-y-4">
            <span className="font-medium text-sm">Email address</span>
            <input
              type="text"
              className="w-80 py-4 rounded-md border-gray-400 border px-4"
            />
          </div>
          <input
            type="text"
            className="w-80 py-4 rounded-md border-gray-400 border px-4 mt-4"
            placeholder="Additional information"
          />
        </form>

        <div>
          <div className="flex items-center justify-around gap-x-60">
            <span className="font-medium text-xl">Product</span>
            <span className="font-medium text-xl">Subtotal</span>
          </div>
          <div className="flex items-center justify-around ">
            {/* <span className="font-medium text-xl">name product</span> */}
            {/* <span className="font-medium text-xl">price</span> */}
          </div>
          <div className="flex items-center justify-around gap-x-60">
            <span className="font-medium text-sm">Subtotal</span>
            <span className="font-medium text-xl">price</span>
          </div>
          <div className="flex items-center justify-around gap-x-60">
            <span className="font-medium text-xl">Total</span>
            <span className="font-medium text-xl mb-4">price</span>
          </div>
          <hr />
          <div className="flex flex-col gap-y-4 ">
            <div className="space-x-2">
              <input type="radio" checked />
              <label htmlFor="" className="font-medium mt-4 inline-block">
                Direct Bank Transfer
              </label>
            </div>
            <p className="text-sm text-gray-400">
              Make your payment directly into our bank account. Please use
              <br /> your Order ID as the payment reference. Your order will not
              be <br /> shipped until the funds have cleared in our account.
            </p>
            <div className="space-x-2">
              <input type="radio" />
              <label htmlFor="" className="text-gray-400">
                Direct Bank Transfer
              </label>
            </div>
            <div className="space-x-2">
              <input type="radio" />
              <label htmlFor="" className="text-gray-400">
                Cash On Delivery
              </label>
            </div>
            <p>
              Your personal data will be used to support your experience <br />
              throughout this website, to manage access to your account,
              <br /> and for other purposes described in our
              <span className="font-bold">privacy policy.</span>
            </p>
            <div className="text-center">
              <button className="bg-white border border-black px-16 py-2 text-xl rounded-xl">
                Place order
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutMain;
