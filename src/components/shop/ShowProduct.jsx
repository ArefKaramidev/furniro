import { useEffect } from "react";
import Product from "../product";

const ShowProduct = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Product />
    </>
  );
};

export default ShowProduct;
