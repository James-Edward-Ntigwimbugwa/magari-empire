
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600" style={{ fontFamily: 'serif' }}>
              Magari Empire
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium whitespace-nowrap cursor-pointer">
              Home
            </Link>
            <Link href="/cars" className="text-gray-700 hover:text-blue-600 font-medium whitespace-nowrap cursor-pointer">
              Browse Cars
            </Link>
            <Link href="/financing" className="text-gray-700 hover:text-blue-600 font-medium whitespace-nowrap cursor-pointer">
              Financing
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium whitespace-nowrap cursor-pointer">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium whitespace-nowrap cursor-pointer">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link href="/cart" className="relative p-2 text-gray-700 hover:text-blue-600 cursor-pointer">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-shopping-cart-2-line text-xl"></i>
              </div>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <Link href="/login" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 whitespace-nowrap cursor-pointer">
              Sign In
            </Link>
            <button 
              className="md:hidden text-gray-700 cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
              </div>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-2">
              <Link href="/" className="text-gray-700 hover:text-blue-600 py-2 cursor-pointer">
                Home
              </Link>
              <Link href="/cars" className="text-gray-700 hover:text-blue-600 py-2 cursor-pointer">
                Browse Cars
              </Link>
              <Link href="/financing" className="text-gray-700 hover:text-blue-600 py-2 cursor-pointer">
                Financing
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 py-2 cursor-pointer">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 py-2 cursor-pointer">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
