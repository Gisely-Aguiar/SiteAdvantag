import { createBrowserRouter } from "react-router";

import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import ProductDetail from "./pages/ProductDetail";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Cookies from "./pages/Cookies";

import { Layout } from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "catalogo", Component: Catalog },
      { path: "produto/:id", Component: ProductDetail },

      // 👇 NOVAS ROTAS
      { path: "privacidade", Component: Privacy },
      { path: "termos", Component: Terms },
      { path: "cookies", Component: Cookies },
    ],
  },
]);