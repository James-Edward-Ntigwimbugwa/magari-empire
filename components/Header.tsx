'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../assets/magariLogo.jpeg';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Site Title */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src={logo}
              alt="Magari Empire Logo"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="text-2xl font-bold text-blue-600 font-serif">
              Magari Empire
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Home', 'Browse Cars', 'Financing', 'About', 'Contact'].map((label) => {
              const href =
                label === 'Home'
                  ? '/'
                  : `/${label.toLowerCase().replace(/\s+/g, '-')}`;
              return (
                <Link
                  key={label}
                  href={href}
                  className="text-gray-700 hover:text-blue-600 font-medium whitespace-nowrap"
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Actions: Cart, Sign In, Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <Link
              href="/cart"
              className="relative p-2 text-gray-700 hover:text-blue-600"
              aria-label="View cart"
            >
              <i className="ri-shopping-cart-2-line text-xl"></i>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            <Link
              href="/login"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 whitespace-nowrap"
            >
              Sign In
            </Link>

            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="md:hidden text-gray-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              <i
                className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-2xl`}
              ></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-2 pt-2 border-t border-gray-200 space-y-2">
            {['Home', 'Browse Cars', 'Financing', 'About', 'Contact'].map(
              (label) => {
                const href =
                  label === 'Home'
                    ? '/'
                    : `/${label.toLowerCase().replace(/\s+/g, '-')}`;
                return (
                  <Link
                    key={label}
                    href={href}
                    className="block px-4 py-2 text-gray-700 hover:text-blue-600"
                  >
                    {label}
                  </Link>
                );
              }
            )}
          </nav>
        )}
      </div>
    </header>
  );
}
