import React, { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import "./Breadcrumb.scss";

const Breadcrumb = ({ categories }: any) => {
  let tempPath = `/products`;
  return (
    <div className="breadcrumb">
      {categories[0] == undefined ? (
        <>
          <Link to={tempPath}>all products</Link>
          <span>/</span>
        </>
      ) : (
        categories.map((category: any) => {
          tempPath += "/" + category;

          return category != undefined ? (
            <>
              <Link to={tempPath}>{category}</Link>
              <span>/</span>
            </>
          ) : null;
        })
      )}

      {/* {category2 ? (
        <div>
          {path1}
          <span> / </span>
          {path2}
        </div>
      ) : category ? (
        path1
      ) : (
        <Link to="/products">All Products</Link>
      )} */}
    </div>
  );
};

export default Breadcrumb;
