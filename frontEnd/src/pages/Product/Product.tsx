import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import { useParams } from "react-router-dom";
import CartContext from "../../CartContext";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import ProductsContext from "../../ProductsContext";
import "./Product.scss";

const Product = () => {
  const { productId } = useParams();
  const { filterProduct } = useContext(ProductsContext);
  const [selectedSize, setSelectedSize] = useState("null");
  const [product, setProduct] = useState({});
  let productImages: HTMLElement | null = null;
  const [showSomething, setShowSomething] = useState(false)

  useEffect(() => {
    if (productId) {
      const filter = filterProduct(productId);
      setProduct(filter);
    }
  }, [productId]);

  console.log(product)

  useLayoutEffect(() => {
    setTimeout(() => {
      productImages = document.getElementById("product-images") ;
      // console.log(productImages)
      // console.log(productImages?.scrollWidth, productImages?.clientWidth)
      if(productImages?.scrollWidth && productImages?.clientWidth)
      setShowSomething(productImages?.scrollWidth >  productImages?.clientWidth)
    }, 500)
    
  }, [product]);


  const { cartData, setCartData } = useContext(CartContext);

  const addToCart = () => {
    if (selectedSize === "null") {
      alert("Please select size");
      return;
    }

    const productExist = cartData.filter(
      (item: any) => item.productId === productId
    );
    if (productExist.length > 0) {
      alert("Product already exist on cart");
      return;
    }

    alert("Added to cart");
    setCartData([...cartData, { productId, selectedSize }]);
  };

  const scrollToLeftorRight = (direction: string) => {
    if (direction === "left") {
      document.getElementById("product-images")?.scrollBy({
        top: 0,
        left: -300,
        behavior: "smooth",
      });
      return;
    }

    document.getElementById("product-images")?.scrollBy({
      top: 0,
      left: 300,
      behavior: "smooth",
    });
  };

  return Object.entries(product).map(([_, value]: any) => {
    return (
      <div className="product-container">
        <div className="product-header">
          <div className="product-info">
            <div className="product-title">{value[1].name}</div>
            <div className="product-category">
              {<Breadcrumb categories={Object.values(value[1].category)} />}
            </div>
            <div className="product-description">{value[1].description}</div>
            <div className="product-price">$ {value[1].price}</div>
            <select
              className="product-size"
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
            >
              <option value="null">Select Size</option>
              {Object.entries(value[1].sizeAvailable).map(
                ([key, value]: any) => {
                  if (value >= 1) {
                    return (
                      <option key={key} value={key}>
                        {key}: Available
                      </option>
                    );
                  } else {
                    return (
                      <option value={key} disabled>
                        {key}: Sold Out
                      </option>
                    );
                  }
                }
              )}
            </select>
            <PrimaryButton text="Add to Cart" onClick={addToCart} />
          </div>
        </div>
        <div className="product-body">
          <div className="product-images" id="product-images">
            {Object.entries(value[1].img).map(([key, value]: any) => {
              return <img src={value} alt={key} />;
            })}
          </div>
          <div className="product-image-buttons">
            {
             showSomething && (
              <>
                <div
                  className="product-body-btn"
                  onClick={() => scrollToLeftorRight("left")}
                >
                  <MdOutlineNavigateBefore />
                </div>
                <div
                  className="product-body-btn"
                  onClick={() => scrollToLeftorRight("right")}
                >
                  <MdOutlineNavigateNext />
                </div>
              </>
            )}
          </div>
        </div>
        <div className="product-footer"></div>
      </div>
    );
  });
};

export default Product;
