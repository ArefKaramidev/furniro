import SingleProduct from "./pages/SingleProduct";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";

export const routes = [
  { path: "/", element: <Home /> },
  { path: "/shop", element: <Shop /> },
  { path: "/shop/:productId", element: <SingleProduct /> },
  { path: "/contact", element: <Contact /> },
  { path: "/checkout", element: <Checkout /> },
  { path: "/cart", element: <Cart /> },
];
