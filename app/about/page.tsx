
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  const stats = [
    { number: '50K+', label: 'Cars Sold' },
    { number: '15+', label: 'Years Experience' },
    { number: '500+', label: 'Happy Customers' },
    { number: '25', label: 'Locations' }
  ];

  const team = [
    {
      name: 'John Smith',
      role: 'CEO & Founder',
      image: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20confident%20male%20CEO%20in%20his%20fifties%20wearing%20a%20business%20suit%20with%20a%20warm%20smile%20standing%20in%20a%20modern%20office%20environment%20with%20natural%20lighting&width=300&height=400&seq=john-smith-ceo&orientation=portrait',
      bio: 'With over 20 years in the automotive industry, John founded Magari Empire to revolutionize car buying.'
    },
    {
      name: 'Sarah Johnson',
      role: 'Sales Director',
      image: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20successful%20female%20sales%20director%20in%20her%20forties%20wearing%20business%20attire%20with%20a%20confident%20smile%20in%20a%20corporate%20setting%20with%20professional%20lighting&width=300&height=400&seq=sarah-johnson-sales&orientation=portrait',
      bio: 'Sarah leads our sales team with expertise in customer service and automotive market trends.'
    },
    {
      name: 'Mike Chen',
      role: 'Finance Manager',
      image: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20an%20experienced%20male%20finance%20manager%20in%20his%20thirties%20wearing%20a%20business%20shirt%20with%20a%20friendly%20smile%20in%20a%20modern%20office%20environment%20with%20natural%20lighting&width=300&height=400&seq=mike-chen-finance&orientation=portrait',
      bio: 'Mike specializes in automotive financing and helps customers find the best loan options.'
    }
  ];

  const values = [
    {
      icon: 'ri-shield-check-line',
      title: 'Trust & Transparency',
      description: 'We believe in honest pricing and transparent business practices. No hidden fees or surprises.'
    },
    {
      icon: 'ri-customer-service-line',
      title: 'Customer First',
      description: 'Our customers are at the heart of everything we do. We strive to exceed expectations.'
    },
    {
      icon: 'ri-star-line',
      title: 'Quality Assurance',
      description: 'Every vehicle undergoes rigorous inspection to ensure you get the best quality car.'
    },
    {
      icon: 'ri-innovation-line',
      title: 'Innovation',
      description: 'We continuously innovate to make car buying easier and more convenient.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Magari Empire
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Your trusted partner in finding the perfect car for over 15 years
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  Magari Empire was founded in 2009 with a simple mission: to make car buying transparent, 
                  easy, and enjoyable for everyone. We started as a small dealership with just a few 
                  cars and a big dream.
                </p>
                <p>
                  Over the years, we've grown into one of the most trusted automotive retailers in the 
                  country, serving thousands of satisfied customers. Our success comes from our 
                  commitment to quality, transparency, and exceptional customer service.
                </p>
                <p>
                  Today, we offer an extensive inventory of new and pre-owned vehicles, competitive 
                  financing options, and a team of automotive experts ready to help you find your 
                  perfect car.
                </p>
              </div>
            </div>
            
            <div>
              <img 
                src="https://readdy.ai/api/search-image?query=Modern%20luxury%20car%20dealership%20showroom%20interior%20with%20multiple%20premium%20vehicles%20displayed%20under%20bright%20professional%20lighting%20with%20glass%20facades%20and%20contemporary%20design%20elements&width=600&height=400&seq=dealership-interior&orientation=landscape"
                alt="Our showroom"
                className="w-full h-96 object-cover object-top rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Numbers
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by thousands of customers nationwide
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${value.icon} text-2xl text-blue-600`}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              The experts behind your car buying experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Find Your Perfect Car?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of satisfied customers who found their dream car with us
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/cars" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 whitespace-nowrap cursor-pointer">
              Browse Cars
            </a>
            <a href="/contact" className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 whitespace-nowrap cursor-pointer">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
