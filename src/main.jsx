import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AboutUs from './components/pages/aboutUs/AboutUs.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async';
import RootLayout from './components/layouts/RootLayout.jsx';
import Shops from './components/pages/shops/Shops.jsx'
import Deal from './components/pages/deal/Deal.jsx'
import Products from './components/pages/products/Products.jsx'
import SingleShop from './components/pages/shops/SingleShop.jsx'
import ProductDetail from './components/pages/products/ProductDetail.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children:[
      {
        path: "/",
        element:<App />,
      },
      {
        path: "/aboutUs",
        element:<AboutUs />
      },
      {
        path:"/shops",
        element:<Shops/>
      },
      {
        path: "/shop/:shopId", // Added this route for shop details
        element: <SingleShop />
      },
      {
        path:"/products",
        element:<Products/>
      },
      {
        path: "/product/:id",
        element:<ProductDetail/>
      },
      {
        path:"/deal",
        element:<Deal/>
      }
    ]
  }
])

const helmetContext={};
console.log("RootLayout rendered");

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider context={helmetContext}>
      <RouterProvider router={router}/>
    </HelmetProvider>
  </StrictMode>
);
