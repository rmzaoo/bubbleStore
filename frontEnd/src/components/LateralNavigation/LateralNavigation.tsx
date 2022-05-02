import React, {
  useContext,
  useEffect,
  useLayoutEffect,
  useReducer,
} from "react";
import {
  AiFillCloseCircle,
  AiOutlineArrowDown,
  AiOutlineArrowUp,
} from "react-icons/ai";
import { Link, Navigate, useNavigate } from "react-router-dom";
import ProductsContext from "../../ProductsContext";
import DropdownList from "../DropdownList/DropdownList";
import "./LateralNavigation.scss";

const LateralNavigation = ({ setFilterOpen, activeCategories }: any) => {
  const { getCategories, getSubCategories } = useContext(ProductsContext);
  const navigate = useNavigate();

  const dropdownState = Object.fromEntries(
    getCategories().map((category: any) => [category, "none"])
  );

  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case "open":
        return { ...state, [action.category]: "flex" };
      case "close":
        return { ...state, [action.category]: "none" };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, dropdownState);

  const handleDropdown = (category: string) => {
    state[category] === "none" &&
      dispatch({ type: "open", category: category });
    state[category] === "flex" &&
      dispatch({ type: "close", category: category });
  };

  return (
    <div className="lateralNav-container">
      <div
        className="lateralNav-close-zone"
        onClick={() => setFilterOpen(false)}
      ></div>
      <div className="lateralNav-content">
        <div className="lateralNav-content-header">
          <h3>Categories</h3>
          <AiFillCloseCircle
            className="lateralNav-content-close"
            onClick={() => setFilterOpen(false)}
          />
        </div>
        <div className="lateralNav-content-body">
          {getCategories().map((category: any) => {
            return (
              <div className="lateralNav-category">
                <div className="lateralNav-category-btn">
                  <Link to={`/products/${category}`}> {category} </Link>
                  <span
                    onClick={() => handleDropdown(category)}
                    className="lateralNav-link-text"
                  >
                    {getSubCategories(category).length >= 1 ? (
                      state[category] === "none" ? (
                        <AiOutlineArrowDown />
                      ) : (
                        <AiOutlineArrowUp />
                      )
                    ) : null}
                  </span>
                </div>
                <DropdownList
                  display={state[category]}
                  category={category}
                  className="lateralNav-subcategory-list"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LateralNavigation;
