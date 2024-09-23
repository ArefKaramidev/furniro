import CheckoutHeader from "../components/checkoutComponents/CheckoutHeader";
import CheckoutMain from "../components/checkoutComponents/main";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Features from "../components/shop/Features";

const Checkout = () => {
  return (
    <>
      <Navbar />
      <CheckoutHeader />
      <CheckoutMain />
      <Features />
      <Footer />
    </>
  );
};

export default Checkout;
