import React from "react";

function Cart() {
  const cartItems = JSON.parse(localStorage.getItem("cart"));
  console.log(cartItems);
  return (
    <div className=" ">
      <div className="container ">
        {cartItems && cartItems.length > 0 ? (
          <section className="container mx-auto my-1 flex w-full flex-col gap-3 px-1 ">
            {/* Mobile cart table */}
            {cartItems.map((x, index) => {
              return (
                <div key={index} className="flex w-full border px-4 py-4">
                  <div className="w-1/7 h-24">
                    <img
                      src={x?.images[0]}
                      alt={x.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="ml-3 flex w-full flex-col justify-center">
                    <div className="flex items-center justify-between">
                      <p className="text-xl font-bold">{x.title}</p>
                    </div>
                    {/* Additional code for size and price remains unchanged */}
                    <p className="py-3 text-xl font-bold text-violet-900">
                      Price : ${x.price}
                    </p>
                  </div>
                  <div className="ml-3 flex w-full flex-col justify-center">
                    <div className="flex items-center ">
                      <p className="text-xl font-bold">Quantity:{x.quantity}</p>
                    </div>
                    {/* Additional code for size and price remains unchanged */}
                    <p className="py-3 text-xl font-bold text-violet-900">
                      Price : ${x.price}
                    </p>
                  </div>
                </div>
              );
            })}
          </section>
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
