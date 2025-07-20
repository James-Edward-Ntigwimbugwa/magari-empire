
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Pacifico, serif' }}>
              Magari Empire
            </h3>
            <p className="text-gray-400 mb-4">
              Your trusted partner for finding the perfect car. We offer a wide selection of quality vehicles at competitive prices.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white cursor-pointer">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-facebook-fill text-xl"></i>
                </div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white cursor-pointer">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-twitter-fill text-xl"></i>
                </div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white cursor-pointer">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-instagram-line text-xl"></i>
                </div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white cursor-pointer">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-youtube-fill text-xl"></i>
                </div>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/cars" className="text-gray-400 hover:text-white cursor-pointer">Browse Cars</Link></li>
              <li><Link href="/financing" className="text-gray-400 hover:text-white cursor-pointer">Financing</Link></li>
              <li><Link href="/trade-in" className="text-gray-400 hover:text-white cursor-pointer">Trade-In</Link></li>
              <li><Link href="/warranty" className="text-gray-400 hover:text-white cursor-pointer">Warranty</Link></li>
              <li><Link href="/service" className="text-gray-400 hover:text-white cursor-pointer">Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link href="/contact" className="text-gray-400 hover:text-white cursor-pointer">Contact Us</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-white cursor-pointer">FAQ</Link></li>
              <li><Link href="/shipping" className="text-gray-400 hover:text-white cursor-pointer">Shipping Info</Link></li>
              <li><Link href="/returns" className="text-gray-400 hover:text-white cursor-pointer">Returns</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-white cursor-pointer">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center">
                <div className="w-5 h-5 flex items-center justify-center mr-2">
                  <i className="ri-map-pin-line"></i>
                </div>
                123 Auto Street, Car City, CC 12345
              </p>
              <p className="flex items-center">
                <div className="w-5 h-5 flex items-center justify-center mr-2">
                  <i className="ri-phone-line"></i>
                </div>
                (555) 123-4567
              </p>
              <p className="flex items-center">
                <div className="w-5 h-5 flex items-center justify-center mr-2">
                  <i className="ri-mail-line"></i>
                </div>
                info@magariEmpire.com
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Magari Empire. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
