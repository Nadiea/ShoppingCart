import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/Context";
import { useParams } from "react-router-dom";

function Viewproduct() {
  const { id } = useParams();
  console.log(id);

  const [product, setProduct] = useState(null); // Initialize product state as null initially

  const { products, cart, setCart } = useContext(ProductContext);
  console.log(products);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]); // Fetch product whenever id changes

  // Add to cart
  const addToCart = (item) => {
    const newCart = [...cart];
    const cartItem = newCart.find((cartItem) => cartItem.id === item.id);

    if (cartItem) {
      cartItem.quantity += 1;
    } else {
      newCart.push({ ...item, quantity: 1 });
    }

    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  // Increment item quantity
  const incrementItem = (item) => {
    const newCart = cart.map((cartItem) =>
      cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    );

    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  // Decrement item quantity
  const decrementItem = (item) => {
    const newCart = cart
      .map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
      )
      .filter((cartItem) => cartItem.quantity > 0);

    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  return (
    <div>
      <div className="container mt-5">
        <h1 className="text-2xl font-bold flex justify-center">
          Single Product Details
        </h1>
        <div className="bg-violet-300 shadow-lg mt-4 p-10 flex">
          <div className="w-1/2  h-80 object-center  ">
            <img className="  w-full h-full " src={product?.images[0]} alt={product?.title} />
          </div>
          <div className="w-1/2 p-4">
            {product && (
              <>
                <span className="font-bold text-xl">{product.title}</span>
                <p className="font-bold text-sm">{product.description}</p>
                <div className="font-bold text-xs">Price: {product.price}</div>
                <div className="font-bold text-xs">Rating: {product.rating}</div>
                <div>
                  {cart.some((item) => item.id === product.id) ? ( // Check if product is already in cart
                    <div className="flex gap-3 mt-3 items-center">
                      <button
                        onClick={() => incrementItem(product)}
                        className="text-3xl font-bold w-10 h-10 flex pb-1 justify-center items-center rounded-full shadow-secondary shadow-md hover:bg-logo hover:bg-blue-500 border-secondary border"
                      >
                        +
                      </button>
                      <div className="text-2xl font-bold">
                        {cart.find((item) => item.id === product.id).quantity}
                      </div>
                      <button
                        onClick={() => decrementItem(product)}
                        className="text-3xl font-bold text-center pb-1 w-10 h-10 flex justify-center items-center rounded-full shadow-secondary shadow-md hover:bg-logo hover:bg-red-600 border-secondary border"
                      >
                        -
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => addToCart(product)}
                      className="py-1 px-2 mt-3 bg-purple-600 font-bold rounded-lg"
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Viewproduct;
