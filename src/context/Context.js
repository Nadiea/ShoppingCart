import React, { createContext, useState, useEffect } from "react";

const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(0); 

  // Get products from API
  const fetchProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    setProducts(data.products);  // Adjusted to access the 'products' property
  };

  useEffect(() => {
    fetchProducts();
  }, []); // Dependency array to fetch products only once on mount








  return (
    <ProductContext.Provider value={{ products, setProducts, cart, setCart }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductContextProvider };
