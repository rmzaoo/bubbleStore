import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { ProductsProvider, productData } from "./ProductsContext";
import { CartProvider } from "./CartContext";

const App = () => {
  const [cartData, setCartData] = React.useState([]);

  return (
    <div>
      <CartProvider value={{ cartData, setCartData }}>
        <ProductsProvider value={productData}>
          <Navbar />
          <Outlet />
        </ProductsProvider>
      </CartProvider>
    </div>
  );
};

export default App;
