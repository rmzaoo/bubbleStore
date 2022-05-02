import React from "react";
import "./Navbar.scss";
import { MdOutlineAccountCircle } from "react-icons/md";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import NavbarInput from "../NavbarInput/NavbarInput";
import Cart from "../Cart/Cart";

const Navbar = () => {

  const [cartIsOpen, setCartIsOpen] = React.useState(false);

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-title">
          <h1>
            <Link to="/">Bubble Store</Link>
          </h1>
        </div>

        <div className="navbar-icons">
          <div className="navbar-search">
            <AiOutlineSearch className="navbar-icon" />
            <NavbarInput />
          </div>
          <MdOutlineAccountCircle className="navbar-icon" />
          <AiOutlineShoppingCart
            className="navbar-icon"
            onClick={() => setCartIsOpen(!cartIsOpen)}
          />
        </div>
      </div>

      <div className="navbar-category">
        <ul>
          <li>
            <Link to="/products/new%20arrivals">New Arrivals</Link>
          </li>
          <li>
            <Link to="/products/clothes">Clothes</Link>
          </li>
          <li>
            <Link to="/products/shoes">Shoes</Link>
          </li>
          <li>
            <Link to="/products/acessories">Acessories</Link>
          </li>
          <li>
            <Link to="/products">all</Link>
          </li>
        </ul>
      </div>

      <div className={`navbar-cart ${cartIsOpen ? "navbar-cart-open" : ""}`}>
        <Cart setCartOpen={setCartIsOpen} />
      </div>
    </div>
  );
};

export default Navbar;
