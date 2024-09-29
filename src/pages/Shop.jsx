import HeaderShop from "../components/shop/HeaderShop";
import Navbar from "../components/Navbar";
import ShowProduct from "../components/shop/ShowProduct";
import Features from "../components/shop/Features";
import Footer from "../components/Footer";
import { useEffect } from "react";

const Shop = () => {
  return (
    <>
      <Navbar />
      <HeaderShop />
      <ShowProduct />
      <Features />
      <Footer />
    </>
  );
};

export default Shop;
