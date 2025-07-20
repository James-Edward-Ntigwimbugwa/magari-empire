
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  const featuredCars = [
    {
      id: 1,
      name: 'BMW X5 2023',
      price: '$65,999',
      image: 'https://readdy.ai/api/search-image?query=Modern%20luxurious%20BMW%20X5%20SUV%202023%20model%20in%20metallic%20silver%20color%20parked%20on%20a%20clean%20white%20showroom%20floor%20with%20soft%20professional%20lighting%20showcasing%20the%20vehicle%20elegant%20design%20and%20premium%20features&width=400&height=300&seq=bmw-x5-2023&orientation=landscape',
      mileage: '15,000 miles',
      fuel: 'Gasoline',
      transmission: 'Automatic'
    },
    {
      id: 2,
      name: 'Mercedes-Benz C-Class 2023',
      price: '$52,999',
      image: 'https://readdy.ai/api/search-image?query=Elegant%20Mercedes-Benz%20C-Class%20sedan%202023%20model%20in%20pearl%20white%20color%20positioned%20on%20a%20pristine%20showroom%20floor%20with%20professional%20studio%20lighting%20highlighting%20the%20cars%20sophisticated%20design%20and%20luxury%20appeal&width=400&height=300&seq=mercedes-c-class-2023&orientation=landscape',
      mileage: '8,500 miles',
      fuel: 'Gasoline',
      transmission: 'Automatic'
    },
    {
      id: 3,
      name: 'Audi Q7 2023',
      price: '$71,999',
      image: 'https://readdy.ai/api/search-image?query=Premium%20Audi%20Q7%20SUV%202023%20model%20in%20midnight%20black%20color%20displayed%20on%20a%20clean%20white%20showroom%20floor%20with%20dramatic%20lighting%20emphasizing%20the%20vehicles%20bold%20design%20and%20advanced%20technology%20features&width=400&height=300&seq=audi-q7-2023&orientation=landscape',
      mileage: '12,000 miles',
      fuel: 'Gasoline',
      transmission: 'Automatic'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      comment: 'Excellent service! Found my dream car quickly and the financing process was seamless.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20satisfied%20female%20customer%20in%20her%20thirties%20with%20a%20warm%20smile%20wearing%20business%20casual%20attire%20against%20a%20clean%20neutral%20background&width=80&height=80&seq=sarah-johnson&orientation=squarish'
    },
    {
      name: 'Michael Chen',
      rating: 5,
      comment: 'Great selection of vehicles and very knowledgeable staff. Highly recommended!',
      image: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20happy%20male%20customer%20in%20his%20forties%20with%20a%20confident%20smile%20wearing%20a%20business%20shirt%20against%20a%20clean%20neutral%20background&width=80&height=80&seq=michael-chen&orientation=squarish'
    },
    {
      name: 'Emma Davis',
      rating: 5,
      comment: 'The online browsing experience was fantastic. Made car shopping so much easier.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20cheerful%20female%20customer%20in%20her%20twenties%20with%20a%20bright%20smile%20wearing%20casual%20professional%20attire%20against%20a%20clean%20neutral%20background&width=80&height=80&seq=emma-davis&orientation=squarish'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="relative h-screen bg-cover bg-center" style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20luxury%20car%20dealership%20showroom%20interior%20with%20multiple%20high-end%20vehicles%20displayed%20on%20a%20polished%20floor%20under%20bright%20professional%20lighting%20with%20glass%20windows%20showing%20city%20skyline%20and%20contemporary%20architectural%20design&width=1920&height=1080&seq=hero-background&orientation=landscape')`
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Find Your Perfect Car
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Browse thousands of quality vehicles from trusted dealers nationwide
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/cars" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 whitespace-nowrap cursor-pointer">
                Browse Cars
              </Link>
              <Link href="/financing" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 whitespace-nowrap cursor-pointer">
                Get Financing
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Magari Empire?
            </h2>
            <p className="text-xl text-gray-600">
              We make car buying simple, transparent, and enjoyable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-search-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">Extensive Inventory</h3>
              <p className="text-gray-600">
                Browse thousands of certified pre-owned and new vehicles from top brands
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-check-line text-2xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">Quality Guaranteed</h3>
              <p className="text-gray-600">
                Every vehicle undergoes comprehensive inspection and comes with warranty
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-hand-coin-line text-2xl text-purple-600"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">Best Prices</h3>
              <p className="text-gray-600">
                Competitive pricing with transparent fees and flexible financing options
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Vehicles
            </h2>
            <p className="text-xl text-gray-600">
              Discover our handpicked selection of premium vehicles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCars.map((car) => (
              <div key={car.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={car.image} 
                  alt={car.name}
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
                  <p className="text-2xl font-bold text-blue-600 mb-4">{car.price}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <div className="w-4 h-4 flex items-center justify-center mr-2">
                        <i className="ri-dashboard-line"></i>
                      </div>
                      <span>{car.mileage}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <div className="w-4 h-4 flex items-center justify-center mr-2">
                        <i className="ri-gas-station-line"></i>
                      </div>
                      <span>{car.fuel}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <div className="w-4 h-4 flex items-center justify-center mr-2">
                        <i className="ri-settings-3-line"></i>
                      </div>
                      <span>{car.transmission}</span>
                    </div>
                  </div>
                  <Link href={`/cars/${car.id}`} className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 whitespace-nowrap cursor-pointer text-center block">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/cars" className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 whitespace-nowrap cursor-pointer">
              View All Cars
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Real reviews from satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover object-top mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <div className="flex text-yellow-500">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <div key={i} className="w-4 h-4 flex items-center justify-center">
                          <i className="ri-star-fill"></i>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Find Your Next Car?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Browse our extensive inventory and find the perfect vehicle for you
          </p>
          <Link href="/cars" className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 whitespace-nowrap cursor-pointer">
            Start Shopping Now
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
