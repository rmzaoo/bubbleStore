import React, { useContext } from "react";
import CartContext from "../../CartContext";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import "./ProductListItem.scss";


type ProductProps = {
   img: string;
   name: string;
   price: number;
   onClick: () => void;
};


const ProductListItem = ({ img, name, price, onClick }: ProductProps) => {
  return (
    <div className="product-item" >
      <img
        src={img}
        alt={name}
        className="product-image"
        onClick={onClick}
      />
      <div className="product-item-info">
        <h3 className="product-item-title" onClick={onClick}>{name}</h3>
        <p className="product-item-price" onClick={onClick}>$ {price}</p>
        {/* <PrimaryButton text="Add to cart" onClick={addToCart} /> */}
      </div>
    </div>
  );
};

export default ProductListItem;
