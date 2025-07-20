
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredContact: 'email'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        preferredContact: 'email'
      });
    }, 3000);
  };

  const locations = [
    {
      name: 'Los Angeles Showroom',
      address: '123 Auto Street, Los Angeles, CA 90210',
      phone: '(555) 123-4567',
      hours: 'Mon-Sat: 9AM-7PM, Sun: 10AM-6PM',
      image: 'https://readdy.ai/api/search-image?query=Modern%20automotive%20showroom%20exterior%20in%20Los%20Angeles%20with%20large%20glass%20windows%20displaying%20luxury%20cars%20and%20professional%20architectural%20design%20with%20clear%20skies&width=400&height=300&seq=la-showroom&orientation=landscape'
    },
    {
      name: 'New York Dealership',
      address: '456 Car Avenue, New York, NY 10001',
      phone: '(555) 987-6543',
      hours: 'Mon-Sat: 9AM-7PM, Sun: 10AM-6PM',
      image: 'https://readdy.ai/api/search-image?query=Contemporary%20car%20dealership%20building%20in%20New%20York%20with%20modern%20facade%20and%20urban%20setting%20showing%20premium%20vehicles%20through%20large%20windows&width=400&height=300&seq=ny-dealership&orientation=landscape'
    },
    {
      name: 'Chicago Branch',
      address: '789 Motor Road, Chicago, IL 60601',
      phone: '(555) 456-7890',
      hours: 'Mon-Sat: 9AM-7PM, Sun: 10AM-6PM',
      image: 'https://readdy.ai/api/search-image?query=Sleek%20automotive%20dealership%20exterior%20in%20Chicago%20with%20contemporary%20design%20glass%20facade%20and%20professional%20lighting%20showcasing%20luxury%20vehicles&width=400&height=300&seq=chicago-branch&orientation=landscape'
    }
  ];

  const contactMethods = [
    {
      icon: 'ri-phone-line',
      title: 'Phone',
      info: '(555) 123-4567',
      description: 'Available Monday-Saturday 9AM-7PM'
    },
    {
      icon: 'ri-mail-line',
      title: 'Email',
      info: 'info@autodmagarEmpireeal.com',
      description: 'We respond within 24 hours'
    },
    {
      icon: 'ri-chat-1-line',
      title: 'Live Chat',
      info: 'Available Now',
      description: 'Chat with our experts instantly'
    },
    {
      icon: 'ri-map-pin-line',
      title: 'Visit Us',
      info: 'Multiple Locations',
      description: 'Find a showroom near you'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Have questions? We're here to help you find your perfect car
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${method.icon} text-2xl text-blue-600`}></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-blue-600 font-medium mb-1">{method.info}</p>
                <p className="text-sm text-gray-600">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-check-line text-2xl text-green-600"></i>
                  </div>
                  <h3 className="text-lg font-semibold text-green-900 mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-green-700">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Contact Method
                      </label>
                      <select
                        name="preferredContact"
                        value={formData.preferredContact}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-8"
                      >
                        <option value="email">Email</option>
                        <option value="phone">Phone</option>
                        <option value="text">Text Message</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="What can we help you with?"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      maxLength={500}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Tell us more about your inquiry..."
                      required
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      {formData.message.length}/500 characters
                    </p>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 whitespace-nowrap cursor-pointer"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Visit Our Locations
              </h2>
              <div className="space-y-6">
                {locations.map((location, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6">
                    <img 
                      src={location.image} 
                      alt={location.name}
                      className="w-full h-48 object-cover object-top rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {location.name}
                    </h3>
                    <div className="space-y-2">
                      <p className="flex items-center text-gray-600">
                        <div className="w-5 h-5 flex items-center justify-center mr-2">
                          <i className="ri-map-pin-line"></i>
                        </div>
                        {location.address}
                      </p>
                      <p className="flex items-center text-gray-600">
                        <div className="w-5 h-5 flex items-center justify-center mr-2">
                          <i className="ri-phone-line"></i>
                        </div>
                        {location.phone}
                      </p>
                      <p className="flex items-center text-gray-600">
                        <div className="w-5 h-5 flex items-center justify-center mr-2">
                          <i className="ri-time-line"></i>
                        </div>
                        {location.hours}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Find Us on the Map
            </h2>
            <p className="text-gray-600">
              Our main showroom in Los Angeles
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.733498864203!2d-118.2455468!3d34.0522346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2s123%20Auto%20Street%2C%20Los%20Angeles%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1703764800000!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
