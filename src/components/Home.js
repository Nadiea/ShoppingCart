import React, { useContext, useEffect } from "react";
import { ProductContext } from "../context/Context";
import Hero from "./Hero";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

function Home() {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  const { products, cart, setCart } = useContext(ProductContext);
  console.log(products);

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
    <div className="mt-2">
      <Hero />
      <div className="container">
        <h1 data-aos="zoom-y-out" className="text-2xl flex justify-center mt-5 mb-8 font-bold">
          Product List
        </h1>
        <div className="grid border shadow-md p-2 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-10">
          {products?.map((item) => {
            const cartItem = cart.find((cartItem) => cartItem.id === item.id);
            return (
              <div
                data-aos="fade-up"
                data-aos-duration="3000"
                key={item.id}
                className="p-3 shadow-xl"
              >
                <div><img
                  src={item.images[0]}
                  alt={item.title}
                  className="w-full h-40 mt-2 object-cover"
                /></div>
                <div className="mt-3">
                  <p className="font-bold text-sm">{item.title}</p>
                  <p className="text-xs">{item.description}</p>
                  <p className="text-xs">Price: ${item.price}</p>
                </div>
                <div className="flex justify-between">
                  {cartItem && cartItem.quantity > 0 ? (
                    <div className="flex gap-3 items-center">
                      <button
                        onClick={() => incrementItem(item)}
                        className="text-3xl font-bold  w-10 h-10 flex pb-1  justify-center items-center rounded-full shadow-secondary shadow-md hover:bg-logo  hover:bg-blue-500 border-secondary border"
                      >
                        +
                      </button>
                      <div className="text-2xl font-bold">{cartItem.quantity}</div>
                      <button
                        onClick={() => decrementItem(item)}
                        className="text-3xl font-bold text-center pb-1 w-10 h-10 flex justify-center items-center rounded-full shadow-secondary shadow-md hover:bg-logo  hover:bg-red-600  border-secondary border"
                      >
                        -
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => addToCart(item)}
                      className="py-1 px-2 bg-neutral-400 font-bold rounded-lg"
                    >
                      Add to Cart
                    </button>
                  )}
                 <Link to={`/products/${item.id}`}><div> <button className="py-1 px-2 bg-red-300 rounded-lg font-bold">View</button></div></Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
