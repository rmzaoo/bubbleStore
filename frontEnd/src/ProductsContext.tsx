import React from "react";
import productsData from "./products.json";

export type Product = {
  name: string;
  price: number;
  description: string;
  weight: number;
  img: string[];
  category: { [key: string]: string };
};

export const productData = {
  filterProductByCategory: (category: string, page: number, sortBy: string) => {
    let filteredProducts = Object.entries(productsData).filter(
      ([key, value]: any) => {
        return Object.entries(value.category).some(
          ([key2, value2]: any) => value2 === category
        );
      }
    );

    if (sortBy == "name") {
      filteredProducts = filteredProducts.sort((a, b) => {
        if (a[1].name < b[1].name) {
          return -1;
        }
        if (a[1].name > b[1].name) {
          return 1;
        }
        return 0;
      });
    } else if (sortBy == "price") {
      filteredProducts = filteredProducts.sort(
        (a, b) => a[1].price - b[1].price
      );
    }

    const productsPerPage = 10;
    const startIndex = productsPerPage * (page - 1);
    const endIndex = productsPerPage * page;
    const slicedProducts = filteredProducts.slice(startIndex, endIndex);
    return {
      totalPages: Math.ceil(filteredProducts.length / productsPerPage),
      products: slicedProducts,
    };
  },
  filterProductByTwoCategory: (
    category: string,
    category2: string,
    page: number,
    sortBy: string
  ) => {
    let filteredProducts = Object.entries(productsData).filter(
      ([key, value]: any) => {
        return (
          Object.entries(value.category).some(
            ([key2, value2]: any) => value2 === category
          ) &&
          Object.entries(value.category).some(
            ([key2, value2]: any) => value2 === category2
          )
        );
      }
    );

    if (sortBy == "name") {
      filteredProducts = filteredProducts.sort((a, b) => {
        if (a[1].name < b[1].name) {
          return -1;
        }
        if (a[1].name > b[1].name) {
          return 1;
        }
        return 0;
      });
    } else if (sortBy == "price") {
      filteredProducts = filteredProducts.sort(
        (a, b) => a[1].price - b[1].price
      );
    }

    const productsPerPage = 10;
    const startIndex = productsPerPage * (page - 1);
    const endIndex = productsPerPage * page;
    const slicedProducts = filteredProducts.slice(startIndex, endIndex);
    return {
      totalPages: Math.ceil(filteredProducts.length / productsPerPage),
      products: slicedProducts,
    };
  },
  filterProductByThreeCategory: (
    category: string,
    category2: string,
    category3: string,
    page: number,
    sortBy: string
  ) => {
    let filteredProducts = Object.entries(productsData).filter(
      ([key, value]: any) => {
        return (
          Object.entries(value.category).some(
            ([key2, value2]: any) => value2 === category
          ) &&
          Object.entries(value.category).some(
            ([key2, value2]: any) => value2 === category2
          ) &&
          Object.entries(value.category).some(
            ([key2, value2]: any) => value2 === category3
          )
        );
      }
    );

    if (sortBy == "name") {
      filteredProducts = filteredProducts.sort((a, b) => {
        if (a[1].name < b[1].name) {
          return -1;
        }
        if (a[1].name > b[1].name) {
          return 1;
        }
        return 0;
      });
    } else if (sortBy == "price") {
      filteredProducts = filteredProducts.sort(
        (a, b) => a[1].price - b[1].price
      );
    }

    const productsPerPage = 10;
    const startIndex = productsPerPage * (page - 1);
    const endIndex = productsPerPage * page;
    const slicedProducts = filteredProducts.slice(startIndex, endIndex);
    return {
      totalPages: Math.ceil(filteredProducts.length / productsPerPage),
      products: slicedProducts,
    };
  },
  filterByNewArrivals: (page: number, sortBy: string) => {
    let filteredProducts = Object.entries(productsData).filter(
      ([key, value]) => value.new === true
    );

    if (sortBy == "name") {
      filteredProducts = filteredProducts.sort((a, b) => {
        if (a[1].name < b[1].name) {
          return -1;
        }
        if (a[1].name > b[1].name) {
          return 1;
        }
        return 0;
      });
    } else if (sortBy == "price") {
      filteredProducts = filteredProducts.sort(
        (a, b) => a[1].price - b[1].price
      );
    }

    const productsPerPage = 10;
    const startIndex = productsPerPage * (page - 1);
    const endIndex = productsPerPage * page;
    const slicedProducts = filteredProducts.slice(startIndex, endIndex);
    return {
      totalPages: Math.ceil(filteredProducts.length / productsPerPage),
      products: slicedProducts,
    };
  },
  filterProduct: (productId: string) => {
    return Object.entries(productsData).filter(
      ([key, value]) => key === productId
    );
  },
  getAllProducts: (page: number, sortBy: string) => {
    let products = Object.entries(productsData);

    if (sortBy == "name") {
      products = products.sort((a, b) => {
        if (a[1].name < b[1].name) {
          return -1;
        }
        if (a[1].name > b[1].name) {
          return 1;
        }
        return 0;
      });
    } else if (sortBy == "price") {
      products = products.sort((a, b) => a[1].price - b[1].price);
    }

    const productsPerPage = 10;
    const startIndex = productsPerPage * (page - 1);
    const endIndex = productsPerPage * page;
    const slicedProducts = products.slice(startIndex, endIndex);
    return {
      totalPages: Math.ceil(products.length / productsPerPage),
      products: slicedProducts,
    };
  },
  getCategories: () => {
    const categories: any = [];
    Object.entries(productsData).forEach(([key, value]) => {
      if (categories.includes(value.category[0])) {
        return;
      }
      categories.push(value.category[0]);
    });
    return categories;
  },
  getSubCategories(category: string) {
    const subCategories: any = [];
    Object.entries(productsData).forEach(([key, value]: any) => {
      if (
        value.category[0] === category &&
        !subCategories.includes(value.category[1])
      )
        subCategories.push(value.category[1]);

      if (
        value.category[1] === category &&
        !subCategories.includes(value.category[2])
      ) {
        if (value.category[2] === undefined) {
          return;
        }
        subCategories.push(value.category[2]);
      }
    });
    return subCategories;
  },
  searchProducts(searchTerm: string) {
    const products = Object.entries(productsData).filter(
      ([key, value]) =>
        value.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        value.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return products;
  },
};

const ProductsContext = React.createContext(productData);

export const ProductsProvider = ProductsContext.Provider;
export const ProductsConsumer = ProductsContext.Consumer;

export default ProductsContext;
