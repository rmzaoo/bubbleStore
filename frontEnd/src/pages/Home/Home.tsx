import React from "react";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import "./Home.scss";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-safescreen">
        <h1 className="home-title">Welcome to Bubble Store</h1>
        <p className="home-subtitle">
          View our products and get the best deals on the best brands.
          <br />
          Sale up to 50% off on all products.
        </p>
        <div className="home-button-container">
          <PrimaryButton
            text="View New Arrivals"
            onClick={() => navigate("/products/new%20arrivals")}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
