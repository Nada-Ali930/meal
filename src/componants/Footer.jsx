import React from 'react';
import logo from '../assets/imeges/logo-BfNap0Pe.png';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <footer className="bg-white rounded-lg shadow-sm dark:bg-gray-900 font-Comic mt-auto z-[99999]">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a href="#" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
              <img src={logo} className="h-8" alt="Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Recipe</span>
            </a>
            <span className='text-[#1D4ED8] font-extrabold text-2xl'>Route</span>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 Nagy Osama™. All Rights Reserved.</span>
        </div>
      </footer>
    </div>
  );
}
