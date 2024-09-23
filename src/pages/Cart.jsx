import HeaderCart from "../components/CartComponenet/HeaderCart";
import MainCart from "../components/CartComponenet/MainCart";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Features from "../components/shop/Features";

const Cart = () => {
  return (
    <>
      <Navbar />
      <HeaderCart />
      <MainCart />
      <Features />
      <Footer />
    </>
  );
};

export default Cart;
