import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Main_Layout from "./Layouts/Main_Layout";
import Home from "./Pages/Home";
import Login from "./Components/Auth/Login";
import Signup from "./Components/Auth/Signup";
import Shop from "./Pages/Shop";
import Categoryproucts from "./Pages/Categoryproucts";
import ProductDetails from "./Components/Fixed/ProductDetails";
import { CartProvider } from "./context/CartContext";
import Cart from "./Pages/Cart";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main_Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/shop/category/:id",
        element: <Categoryproucts />,
      },
      {
        path: "/shop/products/:id",
        element: <ProductDetails />,
      },
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
       <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
);
