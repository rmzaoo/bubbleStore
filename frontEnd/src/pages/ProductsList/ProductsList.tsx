import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import ProductListItem from "../../components/ProductListItem/ProductListItem";
import "./ProductsList.scss";
import ProductsContext from "../../ProductsContext";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import Pagination from "../../components/Pagination/Pagination";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { GiHamburgerMenu } from "react-icons/gi";
import LateralNavigation from "../../components/LateralNavigation/LateralNavigation";

const ProductsList = () => {
  const { category, category2, category3 } = useParams();
  const navigate = useNavigate();
  const {
    filterByNewArrivals,
    filterProductByCategory,
    filterProductByTwoCategory,
    filterProductByThreeCategory,
    getAllProducts,
    getCategories,
    getSubCategories,
  } = useContext(ProductsContext);

  const queryParam = (param: string) => {
    return new URLSearchParams(useLocation().search).get(param);
  };

  const [filteredProducts, setFilteredProducts] = useState({});
  const [filterOpen, setFilterOpen] = useState(false);
  let pageStr = queryParam("page") || "1";

  let [page, setPage] = useState(1);

  useEffect(() => {
    setPage(parseInt(pageStr));
  }, [pageStr]);

  const [totalPages, setTotalPages] = useState(1);
  const [categories, setCategories] = useState([]);

  const sortBy = queryParam("sortby") || "random";

  useEffect(() => {
    if (category === undefined) {
      const allproducts = getAllProducts(page, sortBy);
      setFilteredProducts(allproducts.products);
      setTotalPages(allproducts.totalPages);
      return;
    }

    if (
      category === "new arrivals" &&
      category2 === undefined &&
      category3 === undefined
    ) {
      let filter = filterByNewArrivals(page, sortBy);
      setFilteredProducts(filter.products);
      setTotalPages(filter.totalPages);
      return;
    }

    if (category3 != undefined && category2 != undefined) {
      let filter = filterProductByThreeCategory(
        category,
        category2,
        category3,
        page,
        sortBy
      );
      setFilteredProducts(filter.products);
      setTotalPages(filter.totalPages);
      return;
    }

    if (category2 != undefined) {
      const filter = filterProductByTwoCategory(
        category,
        category2,
        page,
        sortBy
      );
      setFilteredProducts(filter.products);
      setTotalPages(filter.totalPages);
      return;
    }

    const filter = filterProductByCategory(category, page, sortBy);
    setFilteredProducts(filter.products);
    setTotalPages(filter.totalPages);
  }, [category, category2, page, sortBy]);

  useLayoutEffect(() => {
    const categories: any = [];

    getCategories().forEach((category: string) => {
      categories.push(category);
    });

    setCategories(categories);
  }, [category, category2]);

  const changeOrder = (order: string) => {
    let path = `/products`;
    category3
      ? (path += `/${category}/${category2}/${category3}`)
      : category2
      ? (path += `/${category}/${category2}`)
      : category
      ? (path += `/${category}`)
      : (path += "");
    navigate(`${path}?sortby=${order}`);
  };

  return (
    <div className="productPage-container">
      <div className="productPage-header">
        <h5 className="productPage-title">
          <Breadcrumb categories={[category, category2, category3]} />
        </h5>
        <div className="productPage-filters">
          <select
            className="productPage-filter"
            value={sortBy}
            onChange={(e) => changeOrder(e.target.value)}
          >
            <option value="random">Sort by</option>
            <option value="price">Price</option>
            <option value="name">Name</option>
          </select>
          <GiHamburgerMenu
            className="productPage-filter"
            onClick={() => setFilterOpen(!filterOpen)}
          />
        </div>
      </div>
      <div className="productPage-pagination-container">
        <Pagination page={page} totalPages={totalPages} />
      </div>
      <div className={`productPage-lateralNav ${filterOpen ? "lateralNav-open" : ""}`}>
        <LateralNavigation
          setFilterOpen={setFilterOpen}
          activeCategories={[category, category2, category3]}
        />
      </div>
      <div className="productPage-product-container">
        {Object.entries(filteredProducts).map(([_, value]: any) => {
          return (
            <ProductListItem
              key={value[0]}
              img={value[1].img[0]}
              name={value[1].name}
              price={value[1].price}
              onClick={() => navigate(`/product/${value[0]}`)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductsList;
