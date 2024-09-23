import { useRoutes } from "react-router-dom";
import { routes } from "/src/routes";
import Cart from "./pages/Cart";

function App() {
  const router = useRoutes(routes);
  return router;
}

export default App;
