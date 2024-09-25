import { createContext, useState } from "react";
import { productsData } from "../data/productsData";
import CartSidebar from "../components/CartSidebar";

const useCart = () => {
  const [cartData, setCartData] = useState(() => {
    return JSON.parse(localStorage.getItem("productData")) || [];
  });

  const setToLocalStorage = (products) => {
    localStorage.setItem("productData", JSON.stringify(products));
  };

  const addToCart = (data) => {
    let productSavedData =
      JSON.parse(localStorage.getItem("productData")) || [];

    const prevProductIndex = productSavedData.findIndex(
      (item) => item.id === data.id
    );

    if (prevProductIndex === -1) {
      productSavedData = [...productSavedData, data];
    } else {
      productSavedData[prevProductIndex].count += 1;
      // setCartData(productSavedData);
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
  const total = createContext(totalPrice());
  <total.Provider value={totalPrice()}>
    <CartSidebar />
  </total.Provider>;

  const removeCartItem = (id) => {
    const cart = cartData.filter((item) => item.id !== id);
    setToLocalStorage(cart);
    setCartData(cart);
  };

  return { cartData, addToCart, totalPrice, removeCartItem, totalCount, total };
};

export default useCart;

// const {addToCart} = useCart()
// addToCart(data)

// const {cartData} = useCart()
