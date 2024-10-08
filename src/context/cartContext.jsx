import { createContext, useState } from "react";

//* create context -----
export const cartContext = createContext();

const ContextProvider = ({ children }) => {
  const [cartData, setCartData] = useState(() => {
    return JSON.parse(localStorage.getItem("productData")) || [];
  });

  const setToLocalStorage = (products) => {
    localStorage.setItem("productData", JSON.stringify(products));
  };

  const addToCart = (data, count) => {
    let productSavedData =
      JSON.parse(localStorage.getItem("productData")) || [];

    const prevProductIndex = productSavedData.findIndex(
      (item) => item.id == data.id
    );

    if (prevProductIndex == -1) {
      productSavedData = [...productSavedData, data];
    } else {
      productSavedData[prevProductIndex].count += count;
    }
    setToLocalStorage(productSavedData);
    setCartData(productSavedData);
  };

  const totalCount = () => {
    const result = cartData.reduce((prev, current) => prev + current.count, 0);
    return result;
  };
  const totalPrice = () => {
    const result = cartData.reduce((prev, current) => prev + current.price, 0);
    return result;
  };

  const removeCartItem = (id) => {
    const cart = cartData.filter((item) => item.id != id);
    const resetProductCount = cartData.find((item) => item.id == id);
    resetProductCount.count = 0;

    setToLocalStorage(cart);
    setCartData(cart);
  };
  const getTotal = () => {
    return cartData.reduce(
      (prev, current) => prev + current.price * current.count,
      0
    );
  };

  return (
    <>
      <cartContext.Provider
        value={{
          addToCart,
          removeCartItem,
          cartData,
          totalPrice,
          totalCount,
          getTotal,
        }}
      >
        {children}
      </cartContext.Provider>
    </>
  );
};

export default ContextProvider;
