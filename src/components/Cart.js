import React, { useContext } from "react";
import { ProductContext } from "../context/Context";

import { CiCircleRemove } from "react-icons/ci";
import Total from "./Total";

function Cart() {
  const cartItems = JSON.parse(localStorage.getItem("cart"));
  console.log(cartItems);
  const { cart, setCart } = useContext(ProductContext);

  const incrementItem = (x) => {
    const newCart = cart.map((cartItem) =>
      cartItem.id === x.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );

    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  // Decrement item quantity
  const decrementItem = (x) => {
    const newCart = cart
      .map((cartItem) =>
        cartItem.id === x.id && cartItem.quantity > 1
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      )
      .filter((cartItem) => cartItem.quantity > 0);

    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  //remove item from cart
  const handleremove = (x) => {
    const newCart = cart.filter((cartItem) => cartItem.id !== x.id);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  return (
    <div className=" ">
      <div className="container  ">
        <h1 className="text-3sm font-bold text-center my-4">My Cart</h1>
        {cartItems && cartItems.length > 0 ? (
          <div className=" md:flex flex-none gap-2 mb-10">
            <section className="container bg-violet-300 mx-auto my-1 flex w-3/4 flex-col gap-3 px-1  ">
              {cartItems.map((x, index) => {
                return (
                  <div
                    key={index}
                    className="md:flex flex-none w-full  shadow-md  px-4 py-4"
                  >
                    <div className="md:w-2/12 w-full h-24 mr-10">
                      <img
                        src={x?.images[0]}
                        alt={x.name}
                        className="w-full h-full object-cover "
                      />
                    </div>
                    <div className=" flex md:w-3/12 w-full md:ml-3 ml-0 flex-col justify-center">
                      <div className="flex items-center ">
                        <p className="text-sm font-bold">{x.title}</p>
                      </div>
                      {/* Additional code for size and price remains unchanged */}
                      <p className="py-1 text-xs font-bold text-violet-900">
                        ${x.price}/each
                      </p>
                    </div>
                    <div className=" flex w-2/12 flex-col justify-center">
                      <div className="flex items-center ">
                        <p className="text-sm font-bold">
                          Quantity:{x.quantity}
                        </p>
                      </div>
                    </div>

                    <div className="  w-3/12">
                      <div className="flex gap-3 justify-center mt-8 items-center">
                        <button
                          onClick={() => incrementItem(x)}
                          className="text-3sm font-bold  w-10 h-10 flex pb-1  justify-center items-center rounded-full shadow-secondary shadow-md hover:bg-logo  hover:bg-blue-500 border-secondary border"
                        >
                          +
                        </button>
                        <div className="text-2sm font-bold">{x.quantity}</div>
                        <button
                          onClick={() => decrementItem(x)}
                          className="text-3sm font-bold text-center pb-1 w-10 h-10 flex justify-center items-center rounded-full shadow-secondary shadow-md hover:bg-logo  hover:bg-red-600  border-secondary border"
                        >
                          -
                        </button>
                      </div>
                    </div>
                    <div className="  w-2/12">
                      <div className="flex gap-3 font-bold justify-center  mt-10 text-center items-center">
                        price : {x.quantity * x.price}
                      </div>
                    </div>
                    <div className="  w-1/12">
                      <div className="flex gap-3 justify-center mt-8 items-center">
                        <CiCircleRemove
                          onClick={() => handleremove(x)}
                          size={42}
                          className=" hover:text-red-500"
                        />
                      </div>
                    </div>
                   
                  </div>
                );
              })}
            </section>
          <Total/>
          </div>
        ) : (
          <div>
            <h1>Cart is empty</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
