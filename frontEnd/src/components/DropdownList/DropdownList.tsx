import React, { useContext, useReducer } from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { Link } from "react-router-dom";
import ProductsContext from "../../ProductsContext";
import "./DropdownList.scss";

const DropdownList = ({ category, display }: any) => {
  const { getCategories, getSubCategories } = useContext(ProductsContext);

  const dropdownState = Object.fromEntries(
    getSubCategories(category).map((subCategory: any) => [subCategory, "none"])
  );

  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case "open":
        return { ...state, [action.subCategory]: "flex" };
      case "close":
        return { ...state, [action.subCategory]: "none" };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, dropdownState);

  const handleDropdown = (subCategory: string) => {
    state[subCategory] === "none" &&
      dispatch({ type: "open", subCategory: subCategory });
    state[subCategory] === "flex" &&
      dispatch({ type: "close", subCategory: subCategory });
  };

  return (
    <div style={{ display: `${display}` }} className="dropdown-list">
      {getSubCategories(category).map((subCategory: any) => {
        return (
          subCategory != undefined && (
            <>
              <div className="dropdown-btn">
                <Link to={`/products/${category}/${subCategory}`}>
                  {subCategory}
                </Link>
                {getSubCategories(subCategory).length >= 1 ? (
                  <span onClick={() => handleDropdown(subCategory)}>
                    {state[subCategory] === "none" ? (
                      <AiOutlineArrowDown />
                    ) : (
                      <AiOutlineArrowUp />
                    )}
                  </span>
                ) : null}
              </div>
              {state[subCategory] === "flex" &&
                getSubCategories(subCategory).map((subSubCategory: any) => {
                  return (
                    <div className="dropdown-sub-btn">
                      <Link
                        to={`/products/${category}/${subCategory}/${subSubCategory}`}
                      >
                        {subSubCategory}
                      </Link>
                    </div>
                  );
                })}
            </>
          )
        );
      })}
    </div>
  );
};

export default DropdownList;
