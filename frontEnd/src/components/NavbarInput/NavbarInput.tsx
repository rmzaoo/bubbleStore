import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ProductsContext from "../../ProductsContext";
import "./NavbarInput.scss";

const NavbarInput = () => {
  const [input, setInput] = React.useState("");
  const navigate = useNavigate();

  const { searchProducts } = useContext(ProductsContext);

  const enterProduct = (id: any) => {
    navigate(`/product/${id}`);
    setInput("");
  };

  return (
    <div className="navbar-input-container">
      <div className="navbar-input">
        {/* if input have text put custom class on input */}
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search"
          className={input ? "input-primary-extended" : ""}
        />
      </div>
      <div className="navbar-input-dataresults">
        {input.length > 0 ? (
          searchProducts(input).length > 0 ? (
            searchProducts(input).map((product) => {
              return (
                <div
                  className="navbar-input-dataresults-item"
                  onClick={() => enterProduct(product[0])}
                >
                  <img src={product[1].img[0]} alt="product" />
                  <div className="navbar-input-dataresults-item-info">
                    <span>{product[1].name}</span>
                    <span>{product[1].price} $</span>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="navbar-input-dataresults-item">
              <span>No find any product with this name</span>
            </div>
          )
        ) : null}
      </div>
    </div>
  );
};

export default NavbarInput;
