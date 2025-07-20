
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useState } from 'react';

interface CarDetailProps {
  carId: string;
}

export default function CarDetail({ carId }: CarDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedFinancing, setSelectedFinancing] = useState('cash');
  const [loanTerm, setLoanTerm] = useState('60');
  const [downPayment, setDownPayment] = useState('10000');

  const cars = [
    {
      id: '1',
      name: 'BMW X5 2023',
      brand: 'BMW',
      model: 'X5',
      year: 2023,
      price: 65999,
      mileage: 15000,
      fuel: 'Gasoline',
      transmission: 'Automatic',
      engine: '3.0L V6 Turbo',
      drivetrain: 'All-Wheel Drive',
      exterior: 'Metallic Silver',
      interior: 'Black Leather',
      vin: '1ABCD23EFGH456789',
      location: 'Los Angeles, CA',
      condition: 'Used',
      mpg: '22 city / 29 highway',
      images: [
        'https://readdy.ai/api/search-image?query=Modern%20luxurious%20BMW%20X5%20SUV%202023%20model%20in%20metallic%20silver%20color%20parked%20on%20a%20clean%20white%20showroom%20floor%20with%20soft%20professional%20lighting%20showcasing%20the%20vehicle%20elegant%20design%20and%20premium%20features&width=800&height=600&seq=bmw-x5-2023-1&orientation=landscape',
        'https://readdy.ai/api/search-image?query=BMW%20X5%202023%20interior%20view%20showing%20premium%20black%20leather%20seats%20dashboard%20and%20steering%20wheel%20with%20modern%20technology%20displays%20in%20a%20luxury%20automotive%20setting%20with%20professional%20lighting&width=800&height=600&seq=bmw-x5-2023-2&orientation=landscape',
        'https://readdy.ai/api/search-image?query=BMW%20X5%202023%20side%20profile%20view%20highlighting%20the%20vehicles%20sleek%20design%20aerodynamic%20lines%20and%20premium%20alloy%20wheels%20against%20a%20clean%20studio%20background%20with%20professional%20automotive%20photography&width=800&height=600&seq=bmw-x5-2023-3&orientation=landscape',
        'https://readdy.ai/api/search-image?query=BMW%20X5%202023%20rear%20view%20showing%20the%20vehicles%20distinctive%20taillights%20premium%20design%20elements%20and%20luxury%20SUV%20proportions%20in%20a%20professional%20automotive%20photography%20setting&width=800&height=600&seq=bmw-x5-2023-4&orientation=landscape'
      ],
      features: [
        'Leather Seats',
        'Sunroof',
        'Navigation System',
        'Bluetooth',
        'Backup Camera',
        'Heated Seats',
        'Premium Sound System',
        'Keyless Entry',
        'Cruise Control',
        'Parking Sensors'
      ],
      description: 'This stunning BMW X5 combines luxury with performance in a sophisticated package. With its powerful engine and advanced all-wheel drive system, it delivers exceptional driving dynamics while maintaining comfort and elegance. The vehicle has been well-maintained and comes with a comprehensive inspection report.',
      warranty: '2 years / 24,000 miles',
      dealer: 'Premium Auto Gallery',
      dealerPhone: '(555) 123-4567',
      dealerAddress: '123 Auto Street, Los Angeles, CA 90210'
    }
  ];

  const car = cars.find(c => c.id === carId) || cars[0];

  const calculateMonthlyPayment = () => {
    const principal = car.price - parseInt(downPayment);
    const rate = 0.045 / 12;
    const payments = parseInt(loanTerm);
    const monthlyPayment = (principal * rate * Math.pow(1 + rate, payments)) / (Math.pow(1 + rate, payments) - 1);
    return monthlyPayment;
  };

  const relatedCars = [
    {
      id: 2,
      name: 'BMW X3 2023',
      price: 48999,
      image: 'https://readdy.ai/api/search-image?query=BMW%20X3%20SUV%202023%20model%20in%20white%20color%20displayed%20in%20a%20premium%20showroom%20setting%20with%20professional%20lighting%20showcasing%20the%20compact%20luxury%20SUV%20design%20and%20modern%20features&width=300&height=200&seq=bmw-x3-2023&orientation=landscape'
    },
    {
      id: 3,
      name: 'Mercedes-Benz GLC 2023',
      price: 52999,
      image: 'https://readdy.ai/api/search-image?query=Mercedes-Benz%20GLC%20SUV%202023%20model%20in%20silver%20color%20positioned%20in%20a%20luxury%20dealership%20showroom%20with%20elegant%20lighting%20highlighting%20the%20vehicles%20premium%20design%20and%20sophisticated%20styling&width=300&height=200&seq=mercedes-glc-2023&orientation=landscape'
    },
    {
      id: 4,
      name: 'Audi Q5 2023',
      price: 49999,
      image: 'https://readdy.ai/api/search-image?query=Audi%20Q5%20SUV%202023%20model%20in%20black%20color%20displayed%20on%20a%20modern%20showroom%20floor%20with%20contemporary%20lighting%20showcasing%20the%20vehicles%20sleek%20design%20and%20premium%20technology%20features&width=300&height=200&seq=audi-q5-2023&orientation=landscape'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Link href="/cars" className="text-blue-600 hover:text-blue-800 flex items-center cursor-pointer">
            <div className="w-4 h-4 flex items-center justify-center mr-2">
              <i className="ri-arrow-left-line"></i>
            </div>
            Back to Cars
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <img 
                src={car.images[currentImageIndex]} 
                alt={car.name}
                className="w-full h-96 object-cover object-top rounded-lg"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {car.images.map((image, index) => (
                <img 
                  key={index}
                  src={image} 
                  alt={`${car.name} ${index + 1}`}
                  className={`w-full h-20 object-cover object-top rounded cursor-pointer ${
                    currentImageIndex === index ? 'border-2 border-blue-500' : 'border border-gray-300'
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4">
              <div className="flex justify-between items-start mb-2">
                <h1 className="text-3xl font-bold text-gray-900">{car.name}</h1>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  car.condition === 'New' 
                    ? 'bg-green-100 text-green-800' 
                    : car.condition === 'Certified Pre-Owned'
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {car.condition}
                </span>
              </div>
              <p className="text-4xl font-bold text-blue-600 mb-4">
                ${car.price.toLocaleString()}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <div className="w-5 h-5 flex items-center justify-center mr-2">
                    <i className="ri-calendar-line text-gray-600"></i>
                  </div>
                  <span className="text-sm text-gray-600">Year</span>
                </div>
                <p className="font-semibold">{car.year}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <div className="w-5 h-5 flex items-center justify-center mr-2">
                    <i className="ri-dashboard-line text-gray-600"></i>
                  </div>
                  <span className="text-sm text-gray-600">Mileage</span>
                </div>
                <p className="font-semibold">{car.mileage.toLocaleString()} miles</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <div className="w-5 h-5 flex items-center justify-center mr-2">
                    <i className="ri-gas-station-line text-gray-600"></i>
                  </div>
                  <span className="text-sm text-gray-600">Fuel</span>
                </div>
                <p className="font-semibold">{car.fuel}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <div className="w-5 h-5 flex items-center justify-center mr-2">
                    <i className="ri-settings-3-line text-gray-600"></i>
                  </div>
                  <span className="text-sm text-gray-600">Transmission</span>
                </div>
                <p className="font-semibold">{car.transmission}</p>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-semibold mb-4">Payment Calculator</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Payment Method</label>
                  <div className="flex space-x-4">
                    <button 
                      onClick={() => setSelectedFinancing('cash')}
                      className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap cursor-pointer ${
                        selectedFinancing === 'cash' 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-white text-gray-700 border border-gray-300'
                      }`}
                    >
                      Cash
                    </button>
                    <button 
                      onClick={() => setSelectedFinancing('finance')}
                      className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap cursor-pointer ${
                        selectedFinancing === 'finance' 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-white text-gray-700 border border-gray-300'
                      }`}
                    >
                      Finance
                    </button>
                  </div>
                </div>

                {selectedFinancing === 'finance' && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Down Payment</label>
                      <input 
                        type="number" 
                        value={downPayment}
                        onChange={(e) => setDownPayment(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="10000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Loan Term</label>
                      <select 
                        value={loanTerm}
                        onChange={(e) => setLoanTerm(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-8"
                      >
                        <option value="36">36 months</option>
                        <option value="48">48 months</option>
                        <option value="60">60 months</option>
                        <option value="72">72 months</option>
                      </select>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-sm text-gray-600 mb-1">Estimated Monthly Payment</p>
                      <p className="text-2xl font-bold text-blue-600">
                        ${calculateMonthlyPayment().toFixed(0)}/month
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="flex space-x-4">
              <Link href={`/order/${car.id}`} className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg text-center font-semibold hover:bg-blue-700 whitespace-nowrap cursor-pointer">
                Buy Now
              </Link>
              <button className="flex-1 bg-gray-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-700 whitespace-nowrap cursor-pointer">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
              <h2 className="text-2xl font-bold mb-4">Vehicle Details</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Engine</p>
                  <p className="font-semibold">{car.engine}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Drivetrain</p>
                  <p className="font-semibold">{car.drivetrain}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Exterior Color</p>
                  <p className="font-semibold">{car.exterior}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Interior Color</p>
                  <p className="font-semibold">{car.interior}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">MPG</p>
                  <p className="font-semibold">{car.mpg}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">VIN</p>
                  <p className="font-semibold">{car.vin}</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
              <h2 className="text-2xl font-bold mb-4">Features & Options</h2>
              <div className="grid grid-cols-2 gap-2">
                {car.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-4 h-4 flex items-center justify-center mr-2">
                      <i className="ri-check-line text-green-600"></i>
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Description</h2>
              <p className="text-gray-700 leading-relaxed">{car.description}</p>
            </div>
          </div>

          <div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold mb-4">Dealer Information</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold">{car.dealer}</p>
                  <p className="text-gray-600">{car.dealerAddress}</p>
                </div>
                <div>
                  <p className="flex items-center">
                    <div className="w-4 h-4 flex items-center justify-center mr-2">
                      <i className="ri-phone-line text-gray-600"></i>
                    </div>
                    {car.dealerPhone}
                  </p>
                </div>
                <div>
                  <p className="flex items-center">
                    <div className="w-4 h-4 flex items-center justify-center mr-2">
                      <i className="ri-map-pin-line text-gray-600"></i>
                    </div>
                    {car.location}
                  </p>
                </div>
              </div>
              <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg mt-4 hover:bg-green-700 whitespace-nowrap cursor-pointer">
                Contact Dealer
              </button>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Warranty</h3>
              <div className="flex items-center mb-2">
                <div className="w-5 h-5 flex items-center justify-center mr-2">
                  <i className="ri-shield-check-line text-green-600"></i>
                </div>
                <span className="font-semibold">Included</span>
              </div>
              <p className="text-gray-600">{car.warranty}</p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Similar Vehicles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedCars.map((relatedCar) => (
              <div key={relatedCar.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={relatedCar.image} 
                  alt={relatedCar.name}
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{relatedCar.name}</h3>
                  <p className="text-xl font-bold text-blue-600 mb-3">
                    ${relatedCar.price.toLocaleString()}
                  </p>
                  <Link href={`/cars/${relatedCar.id}`} className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 whitespace-nowrap cursor-pointer text-center block">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
