import React, { useContext, useLayoutEffect } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import CartContext from "../../CartContext";
import ProductsContext from "../../ProductsContext";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import "./Cart.scss";

const Cart = ({ setCartOpen }: any) => {
  const { cartData, setCartData } = useContext(CartContext);
  const { filterProduct } = useContext(ProductsContext);
  const [cartProducts, setCartProducts] = React.useState({
    cart: [],
    total: 0,
  });

  const removeFromCart = (id: any) => {
    const newCart = cartData.filter((item: any) => item.productId !== id);
    setCartData(newCart);
  }

  useLayoutEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartData(cart);
  }, []);

  useLayoutEffect(() => {
    let total = 0.0;
    const products: any = [];
    cartData.map((item: any) => {
      const product = filterProduct(item.productId)[0];
      total += product[1].price;
      products.push({product: product[1], id: product[0]});
    });

    setCartProducts({ cart: products, total: total });
    localStorage.setItem("cart", JSON.stringify(cartData));
  }, [cartData]);

  return (
    <>
      <div className="cart-container" onClick={() => setCartOpen(false)}></div>

      <div className="cart-safe-area">
        <div className="cart-header">
          <div className="cart-header-title">
            <h2>Your Cart</h2>
          </div>
          <div className="cart-header-buttons">
            <AiFillCloseCircle onClick={() => setCartOpen(false)} />
          </div>
        </div>
        <div className="cart-body">
          {cartProducts.cart.map((data: any) => {
            return (
              <div className="cart-item">
                <div className="cart-item-image">
                  <img src={data.product.img[0]} alt={data.product.name} />
                </div>
                <div className="cart-item-details">
                  <div>
                    <h3>{data.product.name}</h3>
                    <p>$ {data.product.price}</p>
                  </div>
                  <div>
                    <PrimaryButton
                      text="remove"
                      onClick={() => removeFromCart(data.id)}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="cart-footer">
          <PrimaryButton text="Checkout" />
          <p>Total: ${cartProducts.total}</p>
        </div>
      </div>
    </>
  );
};

export default Cart;
