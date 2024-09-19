import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Shop from "./pages/Shop";

export const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/shop", element: <Shop /> },
  { path: "/shop/:productId", element: <Shop /> },
  { path: "/contact", element: <Contact /> },
];
