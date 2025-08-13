import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import RootLayout from "./components/layouts/RootLayout.jsx";
import SingleShop from "./pages/shops/SingleShop.jsx";
import Shops from "./pages/shops/Shops.jsx"
import Deal from "./pages/deal/Deal.jsx";
import Products from "./pages/products/Products.jsx";
import ProductDetail from "./pages/products/ProductDetail.jsx";
import Dashboard from "./admin/pages/dashboard.jsx";
import AddProduct from "./admin/pages/AddProduct.jsx";
import AboutUs from "./pages/aboutUs/AboutUs.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import Cart from "./pages/cart/cart.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/aboutUs",
        element: <AboutUs/>
      },
      {
        path: "/shops",
        element: <Shops />,
      },
      {
        path: "/shop/:shopId", // Added this route for shop details
        element: <SingleShop />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <ProductDetail />,
      },
      {
        path: "/deal",
        element: <Deal />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/admin-dashboard",
    element: <Dashboard />,
  },
  {
    path: "/admin-dashboard/add-product",
    element: <AddProduct />,
  },
]);

const helmetContext = {};
console.log("RootLayout rendered");

createRoot(document.getElementById("root")).render(
 <Provider store={store}>
   <StrictMode>
    <HelmetProvider context={helmetContext}>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>
 </Provider>
);
