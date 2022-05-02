import React from "react";


const CartContext = React.createContext({ cartData: [], setCartData: (data: any) => {} });

export const CartProvider = CartContext.Provider;
export const CartConsumer = CartContext.Consumer;

export default CartContext;
