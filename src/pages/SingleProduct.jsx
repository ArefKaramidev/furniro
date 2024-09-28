import { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductDetail from "../components/singleProductComponent/ProductDetail";
import ProductInformation from "../components/singleProductComponent/ProductInformation";
import RelatedProducts from "../components/singleProductComponent/RelatedProducts";
import RouteLine from "../components/singleProductComponent/RouteLine";

const SingleProduct = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <RouteLine />
      <ProductDetail />
      <ProductInformation />
      <RelatedProducts />
      <Footer />
    </>
  );
};

export default SingleProduct;
