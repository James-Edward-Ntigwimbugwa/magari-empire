
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useState } from 'react';

export default function CarsPage() {
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedMileage, setSelectedMileage] = useState('');
  const [selectedFuel, setSelectedFuel] = useState('');
  const [sortBy, setSortBy] = useState('price-low');

  const cars = [
    {
      id: 1,
      name: 'BMW X5 2023',
      brand: 'BMW',
      price: 65999,
      year: 2023,
      mileage: 15000,
      fuel: 'Gasoline',
      transmission: 'Automatic',
      image: 'https://readdy.ai/api/search-image?query=Modern%20luxurious%20BMW%20X5%20SUV%202023%20model%20in%20metallic%20silver%20color%20parked%20on%20a%20clean%20white%20showroom%20floor%20with%20soft%20professional%20lighting%20showcasing%20the%20vehicle%20elegant%20design%20and%20premium%20features&width=400&height=300&seq=bmw-x5-2023&orientation=landscape',
      location: 'Los Angeles, CA',
      condition: 'Used'
    },
    {
      id: 2,
      name: 'Mercedes-Benz C-Class 2023',
      brand: 'Mercedes-Benz',
      price: 52999,
      year: 2023,
      mileage: 8500,
      fuel: 'Gasoline',
      transmission: 'Automatic',
      image: 'https://readdy.ai/api/search-image?query=Elegant%20Mercedes-Benz%20C-Class%20sedan%202023%20model%20in%20pearl%20white%20color%20positioned%20on%20a%20pristine%20showroom%20floor%20with%20professional%20studio%20lighting%20highlighting%20the%20cars%20sophisticated%20design%20and%20luxury%20appeal&width=400&height=300&seq=mercedes-c-class-2023&orientation=landscape',
      location: 'New York, NY',
      condition: 'Certified Pre-Owned'
    },
    {
      id: 3,
      name: 'Audi Q7 2023',
      brand: 'Audi',
      price: 71999,
      year: 2023,
      mileage: 12000,
      fuel: 'Gasoline',
      transmission: 'Automatic',
      image: 'https://readdy.ai/api/search-image?query=Premium%20Audi%20Q7%20SUV%202023%20model%20in%20midnight%20black%20color%20displayed%20on%20a%20clean%20white%20showroom%20floor%20with%20dramatic%20lighting%20emphasizing%20the%20vehicles%20bold%20design%20and%20advanced%20technology%20features&width=400&height=300&seq=audi-q7-2023&orientation=landscape',
      location: 'Chicago, IL',
      condition: 'Used'
    },
    {
      id: 4,
      name: 'Tesla Model S 2023',
      brand: 'Tesla',
      price: 89999,
      year: 2023,
      mileage: 5000,
      fuel: 'Electric',
      transmission: 'Automatic',
      image: 'https://readdy.ai/api/search-image?query=Sleek%20Tesla%20Model%20S%20electric%20sedan%202023%20model%20in%20deep%20blue%20color%20positioned%20on%20a%20modern%20showroom%20floor%20with%20futuristic%20lighting%20highlighting%20the%20vehicles%20innovative%20design%20and%20eco-friendly%20technology&width=400&height=300&seq=tesla-model-s-2023&orientation=landscape',
      location: 'San Francisco, CA',
      condition: 'New'
    },
    {
      id: 5,
      name: 'Ford F-150 2022',
      brand: 'Ford',
      price: 45999,
      year: 2022,
      mileage: 25000,
      fuel: 'Gasoline',
      transmission: 'Automatic',
      image: 'https://readdy.ai/api/search-image?query=Rugged%20Ford%20F-150%20pickup%20truck%202022%20model%20in%20metallic%20grey%20color%20parked%20on%20a%20clean%20showroom%20floor%20with%20bright%20lighting%20showcasing%20the%20vehicles%20powerful%20design%20and%20practical%20features&width=400&height=300&seq=ford-f150-2022&orientation=landscape',
      location: 'Dallas, TX',
      condition: 'Used'
    },
    {
      id: 6,
      name: 'Honda Civic 2023',
      brand: 'Honda',
      price: 28999,
      year: 2023,
      mileage: 18000,
      fuel: 'Gasoline',
      transmission: 'Automatic',
      image: 'https://readdy.ai/api/search-image?query=Compact%20Honda%20Civic%20sedan%202023%20model%20in%20bright%20red%20color%20displayed%20on%20a%20pristine%20showroom%20floor%20with%20professional%20lighting%20emphasizing%20the%20cars%20sporty%20design%20and%20efficiency&width=400&height=300&seq=honda-civic-2023&orientation=landscape',
      location: 'Miami, FL',
      condition: 'Certified Pre-Owned'
    },
    {
      id: 7,
      name: 'Porsche 911 2023',
      brand: 'Porsche',
      price: 125999,
      year: 2023,
      mileage: 3000,
      fuel: 'Gasoline',
      transmission: 'Manual',
      image: 'https://readdy.ai/api/search-image?query=Luxury%20Porsche%20911%20sports%20car%202023%20model%20in%20racing%20yellow%20color%20positioned%20on%20a%20premium%20showroom%20floor%20with%20dramatic%20lighting%20highlighting%20the%20vehicles%20iconic%20design%20and%20performance%20heritage&width=400&height=300&seq=porsche-911-2023&orientation=landscape',
      location: 'Beverly Hills, CA',
      condition: 'New'
    },
    {
      id: 8,
      name: 'Jeep Wrangler 2022',
      brand: 'Jeep',
      price: 38999,
      year: 2022,
      mileage: 22000,
      fuel: 'Gasoline',
      transmission: 'Manual',
      image: 'https://readdy.ai/api/search-image?query=Adventure-ready%20Jeep%20Wrangler%20SUV%202022%20model%20in%20forest%20green%20color%20displayed%20on%20a%20showroom%20floor%20with%20natural%20lighting%20showcasing%20the%20vehicles%20rugged%20design%20and%20off-road%20capabilities&width=400&height=300&seq=jeep-wrangler-2022&orientation=landscape',
      location: 'Denver, CO',
      condition: 'Used'
    },
    {
      id: 9,
      name: 'Lexus ES 350 2023',
      brand: 'Lexus',
      price: 48999,
      year: 2023,
      mileage: 11000,
      fuel: 'Gasoline',
      transmission: 'Automatic',
      image: 'https://readdy.ai/api/search-image?query=Sophisticated%20Lexus%20ES%20350%20luxury%20sedan%202023%20model%20in%20champagne%20gold%20color%20positioned%20on%20a%20premium%20showroom%20floor%20with%20elegant%20lighting%20showcasing%20the%20vehicles%20refined%20design%20and%20comfort%20features&width=400&height=300&seq=lexus-es350-2023&orientation=landscape',
      location: 'Seattle, WA',
      condition: 'Certified Pre-Owned'
    }
  ];

  const filteredCars = cars.filter(car => {
    return (
      (!selectedBrand || car.brand === selectedBrand) &&
      (!selectedPrice || 
        (selectedPrice === 'under-30k' && car.price < 30000) ||
        (selectedPrice === '30k-50k' && car.price >= 30000 && car.price < 50000) ||
        (selectedPrice === '50k-80k' && car.price >= 50000 && car.price < 80000) ||
        (selectedPrice === 'over-80k' && car.price >= 80000)
      ) &&
      (!selectedYear || car.year.toString() === selectedYear) &&
      (!selectedMileage || 
        (selectedMileage === 'under-10k' && car.mileage < 10000) ||
        (selectedMileage === '10k-20k' && car.mileage >= 10000 && car.mileage < 20000) ||
        (selectedMileage === '20k-30k' && car.mileage >= 20000 && car.mileage < 30000) ||
        (selectedMileage === 'over-30k' && car.mileage >= 30000)
      ) &&
      (!selectedFuel || car.fuel === selectedFuel)
    );
  });

  const sortedCars = [...filteredCars].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'year-new':
        return b.year - a.year;
      case 'year-old':
        return a.year - b.year;
      case 'mileage-low':
        return a.mileage - b.mileage;
      case 'mileage-high':
        return b.mileage - a.mileage;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Browse Our Car Inventory
          </h1>
          <p className="text-xl text-gray-600">
            Find your perfect vehicle from our extensive collection
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Filter Cars</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Brand</label>
                  <select 
                    value={selectedBrand} 
                    onChange={(e) => setSelectedBrand(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-8"
                  >
                    <option value="">All Brands</option>
                    <option value="BMW">BMW</option>
                    <option value="Mercedes-Benz">Mercedes-Benz</option>
                    <option value="Audi">Audi</option>
                    <option value="Tesla">Tesla</option>
                    <option value="Ford">Ford</option>
                    <option value="Honda">Honda</option>
                    <option value="Porsche">Porsche</option>
                    <option value="Jeep">Jeep</option>
                    <option value="Lexus">Lexus</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                  <select 
                    value={selectedPrice} 
                    onChange={(e) => setSelectedPrice(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-8"
                  >
                    <option value="">Any Price</option>
                    <option value="under-30k">Under $30,000</option>
                    <option value="30k-50k">$30,000 - $50,000</option>
                    <option value="50k-80k">$50,000 - $80,000</option>
                    <option value="over-80k">Over $80,000</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
                  <select 
                    value={selectedYear} 
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-8"
                  >
                    <option value="">Any Year</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mileage</label>
                  <select 
                    value={selectedMileage} 
                    onChange={(e) => setSelectedMileage(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-8"
                  >
                    <option value="">Any Mileage</option>
                    <option value="under-10k">Under 10,000</option>
                    <option value="10k-20k">10,000 - 20,000</option>
                    <option value="20k-30k">20,000 - 30,000</option>
                    <option value="over-30k">Over 30,000</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Fuel Type</label>
                  <select 
                    value={selectedFuel} 
                    onChange={(e) => setSelectedFuel(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-8"
                  >
                    <option value="">Any Fuel</option>
                    <option value="Gasoline">Gasoline</option>
                    <option value="Electric">Electric</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="Diesel">Diesel</option>
                  </select>
                </div>

                <button 
                  onClick={() => {
                    setSelectedBrand('');
                    setSelectedPrice('');
                    setSelectedYear('');
                    setSelectedMileage('');
                    setSelectedFuel('');
                  }}
                  className="w-full bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 whitespace-nowrap cursor-pointer"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          </div>

          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                Showing {sortedCars.length} of {cars.length} cars
              </p>
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium text-gray-700">Sort by:</label>
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                  className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-8"
                >
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="year-new">Year: Newest First</option>
                  <option value="year-old">Year: Oldest First</option>
                  <option value="mileage-low">Mileage: Low to High</option>
                  <option value="mileage-high">Mileage: High to Low</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {sortedCars.map((car) => (
                <div key={car.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
                  <img 
                    src={car.image} 
                    alt={car.name}
                    className="w-full h-48 object-cover object-top"
                  />
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold">{car.name}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        car.condition === 'New' 
                          ? 'bg-green-100 text-green-800' 
                          : car.condition === 'Certified Pre-Owned'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {car.condition}
                      </span>
                    </div>
                    <p className="text-2xl font-bold text-blue-600 mb-3">
                      ${car.price.toLocaleString()}
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-600 text-sm">
                        <div className="w-4 h-4 flex items-center justify-center mr-2">
                          <i className="ri-calendar-line"></i>
                        </div>
                        <span>{car.year}</span>
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <div className="w-4 h-4 flex items-center justify-center mr-2">
                          <i className="ri-dashboard-line"></i>
                        </div>
                        <span>{car.mileage.toLocaleString()} miles</span>
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <div className="w-4 h-4 flex items-center justify-center mr-2">
                          <i className="ri-gas-station-line"></i>
                        </div>
                        <span>{car.fuel}</span>
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <div className="w-4 h-4 flex items-center justify-center mr-2">
                          <i className="ri-map-pin-line"></i>
                        </div>
                        <span>{car.location}</span>
                      </div>
                    </div>
                    <Link href={`/cars/${car.id}`} className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 whitespace-nowrap cursor-pointer text-center block">
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {sortedCars.length === 0 && (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-car-line text-2xl text-gray-400"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No cars found</h3>
                <p className="text-gray-600">Try adjusting your filters to see more results</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
