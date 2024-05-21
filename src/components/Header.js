import React, { useContext } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/Context";

function Header() {
  const { cart } = useContext(ProductContext);

  return (
    <div className=" flex">
      {" "}
      <div className="container">
        <div className=" container flex justify-between  bg-purple-500  text-black">
          <div>
            <Link to="/"><h1 className="text-2xl font-bold">E-commerce</h1></Link>
          </div>
          <div className="hidden sm:hidden md:hidden lg:hidden xl:flex 2xl:flex h-10 mt-1 gap-2 mb-1">
            <input
              type="text"
              placeholder="Search"
              className="p-2 w-full bg-purple-300 "
            />
            <button className="bg-purple-700 text-black rounded p-2">
              Search
            </button>
          </div>
          <div>
            <Link to="/cart">
              <button className="text-black  font-bold p-2 flex">
                <FaCartArrowDown size={25} />
                <span className="bg-red-400 text-sm text-white rounded-full">
                  {cart.length}
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
