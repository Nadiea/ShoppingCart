import React, { useContext } from 'react';
import { FaCartArrowDown } from 'react-icons/fa';
import { ProductContext } from '../context/Context'; // Ensure the correct path

function Header() {
  const { cart } = useContext(ProductContext);

  return (
    <div>
      <div className='container flex justify-between bg-slate-100 shadow-xl text-black'>
        <div>
          <h1 className='text-2xl font-bold'>E-commerce</h1>
        </div>
        <div className='hidden sm:hidden md:hidden lg:hidden xl:flex 2xl:flex'>
          <input type='text' placeholder='Search' className='p-2 w-full bg-slate-100 border' />
          <button className='bg-slate-400 text-white rounded p-2'>Search</button>
        </div>
        <div>
          <button className='text-black font-bold p-2 flex'>
            <FaCartArrowDown size={25} />
            <span className='bg-red-400 text-sm text-white rounded-full '>{cart}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
