import React, { useContext } from "react";
import { ProductContext } from "../context/Context";

function Home() {
  const { products, cart, setCart } = useContext(ProductContext);

  // Add to cart
 const addToCart = (id) => {
    setCart(cart + 1);
    if (localStorage.getItem("cart")) {
      let cart = JSON.parse(localStorage.getItem("cart"));
      cart.push(id);
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      localStorage.setItem("cart", JSON.stringify([id]));
    }
 }

  return (
    <div className="m-3">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-10">
          {products?.map((item) => (
            <div key={item.id} className="p-3 shadow-xl">
              <img src={item.images[0]} alt="test" className="w-full h-40 mt-2 object-cover" />
              <div className="mt-3">
                <p className="font-bold text-sm">{item.title}</p>
                <p className="text-xs">{item.description}</p>
                <p className="text-xs">Price: ${item.price}</p>
              </div>
              <div className="flex justify-between">
                <button
                  onClick={() => addToCart(item.id)}
                  className="py-1 px-2 bg-neutral-400 font-bold rounded-lg"
                >
                  Add to Cart
                </button>
                <button className="py-1 px-2 bg-red-300 rounded-lg font-bold">View</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
