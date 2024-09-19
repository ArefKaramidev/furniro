import Navbar from "../components/Navbar";
import ProductDetail from "../components/singleProductComponent/ProductDetail";
import ProductInformation from "../components/singleProductComponent/ProductInformation";
import RouteLine from "../components/singleProductComponent/RouteLine";

const SingleProduct = () => {
  return (
    <>
      <Navbar />
      <RouteLine />
      <ProductDetail />
      <ProductInformation />
    </>
  );
};

export default SingleProduct;
