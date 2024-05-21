import React, { createContext, useState, useEffect } from "react";

 export  const ProductContext = createContext();

  export  function  ProductContextProvider({ children }){
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(() => {
    // Initialize cart from localStorage
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Get products from API
  const fetchProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    setProducts(data.products);  // Adjusted to access the 'products' property
  };

  useEffect(() => {
    fetchProducts();
  }, []); // Dependency array to fetch products only once on mount




  const value = { setCart, cart , products, setProducts};



  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
};


