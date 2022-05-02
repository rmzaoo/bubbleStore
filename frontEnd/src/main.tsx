import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home/Home";
import "./main.scss";
import ProductsList from "./pages/ProductsList/ProductsList";
import Product from "./pages/Product/Product";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<ProductsList />}>
            <Route path=":category" element={<ProductsList />}>
              <Route path=":category2" element={<ProductsList />}>
                <Route path=":category3" element={<ProductsList />} />
              </Route>
            </Route>
          </Route>
          <Route path="/product">
            <Route path=":productId" element={<Product />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
