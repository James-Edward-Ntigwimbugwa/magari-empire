
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useState } from 'react';

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'BMW X5 2023',
      price: 65999,
      image: 'https://readdy.ai/api/search-image?query=Modern%20luxurious%20BMW%20X5%20SUV%202023%20model%20in%20metallic%20silver%20color%20parked%20on%20a%20clean%20white%20showroom%20floor%20with%20soft%20professional%20lighting%20showcasing%20the%20vehicle%20elegant%20design%20and%20premium%20features&width=300&height=200&seq=bmw-x5-2023&orientation=landscape',
      year: 2023,
      mileage: 15000,
      location: 'Los Angeles, CA',
      warranty: 'Extended',
      insurance: true,
      addedDate: '2024-01-15'
    },
    {
      id: 2,
      name: 'Mercedes-Benz C-Class 2023',
      price: 52999,
      image: 'https://readdy.ai/api/search-image?query=Elegant%20Mercedes-Benz%20C-Class%20sedan%202023%20model%20in%20pearl%20white%20color%20positioned%20on%20a%20pristine%20showroom%20floor%20with%20professional%20studio%20lighting%20highlighting%20the%20cars%20sophisticated%20design%20and%20luxury%20appeal&width=300&height=200&seq=mercedes-c-class-2023&orientation=landscape',
      year: 2023,
      mileage: 8500,
      location: 'New York, NY',
      warranty: 'Basic',
      insurance: false,
      addedDate: '2024-01-16'
    }
  ]);

  const removeFromCart = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const updateWarranty = (id: number, warranty: string) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, warranty } : item
    ));
  };

  const updateInsurance = (id: number, insurance: boolean) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, insurance } : item
    ));
  };

  const getWarrantyPrice = (warranty: string) => {
    switch (warranty) {
      case 'Extended': return 2500;
      case 'Premium': return 4500;
      default: return 0;
    }
  };

  const getItemTotal = (item: any) => {
    let total = item.price;
    total += getWarrantyPrice(item.warranty);
    if (item.insurance) total += 1200;
    return total;
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + getItemTotal(item), 0);
  };

  const getCartSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Shopping Cart</h1>
          <p className="text-gray-600">
            {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-shopping-cart-line text-3xl text-gray-400"></i>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Start browsing our cars to add items to your cart</p>
            <Link href="/cars" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 whitespace-nowrap cursor-pointer">
              Browse Cars
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm">
                {cartItems.map((item, index) => (
                  <div key={item.id} className={`p-6 ${index > 0 ? 'border-t border-gray-200' : ''}`}>
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-48 object-cover object-top rounded-lg"
                        />
                      </div>
                      
                      <div className="md:w-2/3">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                            <p className="text-gray-600">Added on {new Date(item.addedDate).toLocaleDateString()}</p>
                          </div>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-600 hover:text-red-800 cursor-pointer"
                          >
                            <div className="w-6 h-6 flex items-center justify-center">
                              <i className="ri-delete-bin-line text-xl"></i>
                            </div>
                          </button>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div className="text-sm">
                            <span className="text-gray-600">Year:</span>
                            <span className="ml-2 font-semibold">{item.year}</span>
                          </div>
                          <div className="text-sm">
                            <span className="text-gray-600">Mileage:</span>
                            <span className="ml-2 font-semibold">{item.mileage.toLocaleString()} miles</span>
                          </div>
                          <div className="text-sm col-span-2">
                            <span className="text-gray-600">Location:</span>
                            <span className="ml-2 font-semibold">{item.location}</span>
                          </div>
                        </div>
                        
                        <div className="space-y-4 mb-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Warranty Options
                            </label>
                            <div className="flex space-x-2">
                              <button
                                onClick={() => updateWarranty(item.id, 'Basic')}
                                className={`px-3 py-1 rounded-full text-sm whitespace-nowrap cursor-pointer ${
                                  item.warranty === 'Basic' 
                                    ? 'bg-blue-600 text-white' 
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                              >
                                Basic (Free)
                              </button>
                              <button
                                onClick={() => updateWarranty(item.id, 'Extended')}
                                className={`px-3 py-1 rounded-full text-sm whitespace-nowrap cursor-pointer ${
                                  item.warranty === 'Extended' 
                                    ? 'bg-blue-600 text-white' 
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                              >
                                Extended (+$2,500)
                              </button>
                              <button
                                onClick={() => updateWarranty(item.id, 'Premium')}
                                className={`px-3 py-1 rounded-full text-sm whitespace-nowrap cursor-pointer ${
                                  item.warranty === 'Premium' 
                                    ? 'bg-blue-600 text-white' 
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                              >
                                Premium (+$4,500)
                              </button>
                            </div>
                          </div>
                          
                          <div>
                            <label className="flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked={item.insurance}
                                onChange={(e) => updateInsurance(item.id, e.target.checked)}
                                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                              />
                              <span className="ml-2 text-sm text-gray-700">
                                Add Gap Insurance (+$1,200)
                              </span>
                            </label>
                          </div>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-lg font-semibold text-gray-900">
                              ${getItemTotal(item).toLocaleString()}
                            </p>
                            <p className="text-sm text-gray-600">
                              Base: ${item.price.toLocaleString()}
                            </p>
                          </div>
                          <div className="flex space-x-2">
                            <Link href={`/cars/${item.id}`} className="text-blue-600 hover:text-blue-800 text-sm cursor-pointer">
                              View Details
                            </Link>
                            <Link href={`/order/${item.id}`} className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 whitespace-nowrap cursor-pointer">
                              Buy Now
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
                <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span>Subtotal ({cartItems.length} {cartItems.length === 1 ? 'item' : 'items'})</span>
                    <span>${getCartSubtotal().toLocaleString()}</span>
                  </div>
                  
                  {cartItems.some(item => item.warranty !== 'Basic') && (
                    <div className="flex justify-between">
                      <span>Warranty Options</span>
                      <span>
                        +${cartItems.reduce((total, item) => total + getWarrantyPrice(item.warranty), 0).toLocaleString()}
                      </span>
                    </div>
                  )}
                  
                  {cartItems.some(item => item.insurance) && (
                    <div className="flex justify-between">
                      <span>Gap Insurance</span>
                      <span>
                        +${(cartItems.filter(item => item.insurance).length * 1200).toLocaleString()}
                      </span>
                    </div>
                  )}
                  
                  <div className="flex justify-between">
                    <span>Estimated Taxes</span>
                    <span>${Math.round(getCartTotal() * 0.08).toLocaleString()}</span>
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <span>${Math.round(getCartTotal() * 1.08).toLocaleString()}</span>
                  </div>
                </div>
                
                <div className="mt-6 space-y-3">
                  <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 whitespace-nowrap cursor-pointer">
                    Proceed to Checkout
                  </button>
                  <button className="w-full bg-gray-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-gray-700 whitespace-nowrap cursor-pointer">
                    Get Financing
                  </button>
                </div>
                
                <div className="mt-6 text-center">
                  <Link href="/cars" className="text-blue-600 hover:text-blue-800 text-sm cursor-pointer">
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
