
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useState } from 'react';

interface OrderFormProps {
  carId: string;
}

export default function OrderForm({ carId }: OrderFormProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    
    // Address Information
    address: '',
    city: '',
    state: '',
    zipCode: '',
    
    // Employment Information
    employer: '',
    income: '',
    employmentType: '',
    
    // Purchase Information
    paymentMethod: 'finance',
    downPayment: '10000',
    loanTerm: '60',
    tradeIn: 'no',
    tradeInVehicle: '',
    tradeInValue: '',
    
    // Additional Options
    warranty: 'basic',
    insurance: 'no',
    
    // Delivery Information
    deliveryMethod: 'pickup',
    deliveryAddress: '',
    deliveryDate: ''
  });

  const car = {
    id: carId,
    name: 'BMW X5 2023',
    price: 65999,
    image: 'https://readdy.ai/api/search-image?query=Modern%20luxurious%20BMW%20X5%20SUV%202023%20model%20in%20metallic%20silver%20color%20parked%20on%20a%20clean%20white%20showroom%20floor%20with%20soft%20professional%20lighting%20showcasing%20the%20vehicle%20elegant%20design%20and%20premium%20features&width=400&height=300&seq=bmw-x5-2023&orientation=landscape'
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateMonthlyPayment = () => {
    if (formData.paymentMethod === 'cash') return 0;
    
    const principal = car.price - parseInt(formData.downPayment || '0');
    const rate = 0.045 / 12;
    const payments = parseInt(formData.loanTerm);
    const monthlyPayment = (principal * rate * Math.pow(1 + rate, payments)) / (Math.pow(1 + rate, payments) - 1);
    return monthlyPayment;
  };

  const calculateTotal = () => {
    let total = car.price;
    
    // Add warranty cost
    if (formData.warranty === 'extended') {
      total += 2500;
    } else if (formData.warranty === 'premium') {
      total += 4500;
    }
    
    // Add insurance cost
    if (formData.insurance === 'yes') {
      total += 1200;
    }
    
    // Subtract trade-in value
    if (formData.tradeIn === 'yes' && formData.tradeInValue) {
      total -= parseInt(formData.tradeInValue);
    }
    
    return total;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the order to your backend
    console.log('Order submitted:', formData);
    
    // Redirect to checkout
    window.location.href = `/checkout/${carId}`;
  };

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const steps = [
    'Personal Info',
    'Employment',
    'Financing',
    'Options',
    'Review'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Link href={`/cars/${carId}`} className="text-blue-600 hover:text-blue-800 flex items-center cursor-pointer">
            <div className="w-4 h-4 flex items-center justify-center mr-2">
              <i className="ri-arrow-left-line"></i>
            </div>
            Back to Car Details
          </Link>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Complete Your Order</h1>
          
          {/* Progress Bar */}
          <div className="flex items-center mb-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                  index + 1 <= currentStep 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {index + 1}
                </div>
                <span className={`ml-2 text-sm ${
                  index + 1 <= currentStep 
                    ? 'text-blue-600 font-semibold' 
                    : 'text-gray-500'
                }`}>
                  {step}
                </span>
                {index < steps.length - 1 && (
                  <div className={`w-12 h-0.5 mx-4 ${
                    index + 1 < currentStep 
                      ? 'bg-blue-600' 
                      : 'bg-gray-200'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <form onSubmit={handleSubmit}>
                {/* Step 1: Personal Information */}
                {currentStep === 1 && (
                  <div>
                    <h2 className="text-xl font-bold mb-6">Personal Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                        <select
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-8"
                          required
                        >
                          <option value="">Select State</option>
                          <option value="CA">California</option>
                          <option value="NY">New York</option>
                          <option value="TX">Texas</option>
                          <option value="FL">Florida</option>
                          <option value="IL">Illinois</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">ZIP Code</label>
                        <input
                          type="text"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Employment Information */}
                {currentStep === 2 && (
                  <div>
                    <h2 className="text-xl font-bold mb-6">Employment Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Employer</label>
                        <input
                          type="text"
                          name="employer"
                          value={formData.employer}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Employment Type</label>
                        <select
                          name="employmentType"
                          value={formData.employmentType}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-8"
                          required
                        >
                          <option value="">Select Type</option>
                          <option value="full-time">Full Time</option>
                          <option value="part-time">Part Time</option>
                          <option value="self-employed">Self Employed</option>
                          <option value="retired">Retired</option>
                        </select>
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Annual Income</label>
                        <input
                          type="number"
                          name="income"
                          value={formData.income}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="75000"
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Financing Information */}
                {currentStep === 3 && (
                  <div>
                    <h2 className="text-xl font-bold mb-6">Financing Options</h2>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Payment Method</label>
                        <div className="grid grid-cols-2 gap-4">
                          <button
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, paymentMethod: 'cash' }))}
                            className={`p-4 border rounded-lg text-center whitespace-nowrap cursor-pointer ${
                              formData.paymentMethod === 'cash' 
                                ? 'border-blue-500 bg-blue-50 text-blue-600' 
                                : 'border-gray-300 hover:border-gray-400'
                            }`}
                          >
                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                              <i className="ri-hand-coin-line text-green-600"></i>
                            </div>
                            <div className="font-semibold">Cash Payment</div>
                          </button>
                          <button
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, paymentMethod: 'finance' }))}
                            className={`p-4 border rounded-lg text-center whitespace-nowrap cursor-pointer ${
                              formData.paymentMethod === 'finance' 
                                ? 'border-blue-500 bg-blue-50 text-blue-600' 
                                : 'border-gray-300 hover:border-gray-400'
                            }`}
                          >
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                              <i className="ri-bank-card-line text-blue-600"></i>
                            </div>
                            <div className="font-semibold">Finance</div>
                          </button>
                        </div>
                      </div>

                      {formData.paymentMethod === 'finance' && (
                        <>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Down Payment</label>
                            <input
                              type="number"
                              name="downPayment"
                              value={formData.downPayment}
                              onChange={handleInputChange}
                              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              placeholder="10000"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Loan Term</label>
                            <select
                              name="loanTerm"
                              value={formData.loanTerm}
                              onChange={handleInputChange}
                              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-8"
                            >
                              <option value="36">36 months</option>
                              <option value="48">48 months</option>
                              <option value="60">60 months</option>
                              <option value="72">72 months</option>
                            </select>
                          </div>
                        </>
                      )}

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Trade-in Vehicle</label>
                        <div className="grid grid-cols-2 gap-4">
                          <button
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, tradeIn: 'no' }))}
                            className={`p-3 border rounded-lg text-center whitespace-nowrap cursor-pointer ${
                              formData.tradeIn === 'no' 
                                ? 'border-blue-500 bg-blue-50 text-blue-600' 
                                : 'border-gray-300 hover:border-gray-400'
                            }`}
                          >
                            No Trade-in
                          </button>
                          <button
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, tradeIn: 'yes' }))}
                            className={`p-3 border rounded-lg text-center whitespace-nowrap cursor-pointer ${
                              formData.tradeIn === 'yes' 
                                ? 'border-blue-500 bg-blue-50 text-blue-600' 
                                : 'border-gray-300 hover:border-gray-400'
                            }`}
                          >
                            I have a Trade-in
                          </button>
                        </div>
                      </div>

                      {formData.tradeIn === 'yes' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Trade-in Vehicle</label>
                            <input
                              type="text"
                              name="tradeInVehicle"
                              value={formData.tradeInVehicle}
                              onChange={handleInputChange}
                              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              placeholder="2020 Toyota Camry"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Estimated Value</label>
                            <input
                              type="number"
                              name="tradeInValue"
                              value={formData.tradeInValue}
                              onChange={handleInputChange}
                              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              placeholder="15000"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Step 4: Additional Options */}
                {currentStep === 4 && (
                  <div>
                    <h2 className="text-xl font-bold mb-6">Additional Options</h2>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Extended Warranty</label>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <button
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, warranty: 'basic' }))}
                            className={`p-4 border rounded-lg text-center whitespace-nowrap cursor-pointer ${
                              formData.warranty === 'basic' 
                                ? 'border-blue-500 bg-blue-50 text-blue-600' 
                                : 'border-gray-300 hover:border-gray-400'
                            }`}
                          >
                            <div className="font-semibold">Basic</div>
                            <div className="text-sm text-gray-600">Included</div>
                          </button>
                          <button
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, warranty: 'extended' }))}
                            className={`p-4 border rounded-lg text-center whitespace-nowrap cursor-pointer ${
                              formData.warranty === 'extended' 
                                ? 'border-blue-500 bg-blue-50 text-blue-600' 
                                : 'border-gray-300 hover:border-gray-400'
                            }`}
                          >
                            <div className="font-semibold">Extended</div>
                            <div className="text-sm text-gray-600">+$2,500</div>
                          </button>
                          <button
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, warranty: 'premium' }))}
                            className={`p-4 border rounded-lg text-center whitespace-nowrap cursor-pointer ${
                              formData.warranty === 'premium' 
                                ? 'border-blue-500 bg-blue-50 text-blue-600' 
                                : 'border-gray-300 hover:border-gray-400'
                            }`}
                          >
                            <div className="font-semibold">Premium</div>
                            <div className="text-sm text-gray-600">+$4,500</div>
                          </button>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Gap Insurance</label>
                        <div className="grid grid-cols-2 gap-4">
                          <button
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, insurance: 'no' }))}
                            className={`p-3 border rounded-lg text-center whitespace-nowrap cursor-pointer ${
                              formData.insurance === 'no' 
                                ? 'border-blue-500 bg-blue-50 text-blue-600' 
                                : 'border-gray-300 hover:border-gray-400'
                            }`}
                          >
                            No Thanks
                          </button>
                          <button
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, insurance: 'yes' }))}
                            className={`p-3 border rounded-lg text-center whitespace-nowrap cursor-pointer ${
                              formData.insurance === 'yes' 
                                ? 'border-blue-500 bg-blue-50 text-blue-600' 
                                : 'border-gray-300 hover:border-gray-400'
                            }`}
                          >
                            Add Insurance (+$1,200)
                          </button>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Delivery Method</label>
                        <div className="grid grid-cols-2 gap-4">
                          <button
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, deliveryMethod: 'pickup' }))}
                            className={`p-4 border rounded-lg text-center whitespace-nowrap cursor-pointer ${
                              formData.deliveryMethod === 'pickup' 
                                ? 'border-blue-500 bg-blue-50 text-blue-600' 
                                : 'border-gray-300 hover:border-gray-400'
                            }`}
                          >
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                              <i className="ri-store-line text-blue-600"></i>
                            </div>
                            <div className="font-semibold">Pickup</div>
                            <div className="text-sm text-gray-600">Free</div>
                          </button>
                          <button
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, deliveryMethod: 'delivery' }))}
                            className={`p-4 border rounded-lg text-center whitespace-nowrap cursor-pointer ${
                              formData.deliveryMethod === 'delivery' 
                                ? 'border-blue-500 bg-blue-50 text-blue-600' 
                                : 'border-gray-300 hover:border-gray-400'
                            }`}
                          >
                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                              <i className="ri-truck-line text-green-600"></i>
                            </div>
                            <div className="font-semibold">Home Delivery</div>
                            <div className="text-sm text-gray-600">$299</div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 5: Review */}
                {currentStep === 5 && (
                  <div>
                    <h2 className="text-xl font-bold mb-6">Review Your Order</h2>
                    <div className="space-y-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-semibold mb-2">Personal Information</h3>
                        <p>{formData.firstName} {formData.lastName}</p>
                        <p>{formData.email}</p>
                        <p>{formData.phone}</p>
                        <p>{formData.address}, {formData.city}, {formData.state} {formData.zipCode}</p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-semibold mb-2">Payment Information</h3>
                        <p>Payment Method: {formData.paymentMethod === 'cash' ? 'Cash' : 'Finance'}</p>
                        {formData.paymentMethod === 'finance' && (
                          <>
                            <p>Down Payment: ${parseInt(formData.downPayment).toLocaleString()}</p>
                            <p>Loan Term: {formData.loanTerm} months</p>
                            <p>Monthly Payment: ${calculateMonthlyPayment().toFixed(0)}</p>
                          </>
                        )}
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-semibold mb-2">Additional Options</h3>
                        <p>Warranty: {formData.warranty}</p>
                        <p>Gap Insurance: {formData.insurance === 'yes' ? 'Yes' : 'No'}</p>
                        <p>Delivery: {formData.deliveryMethod === 'pickup' ? 'Pickup' : 'Home Delivery'}</p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex justify-between mt-8">
                  <button
                    type="button"
                    onClick={prevStep}
                    className={`px-6 py-3 rounded-lg font-semibold whitespace-nowrap cursor-pointer ${
                      currentStep === 1 
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                        : 'bg-gray-600 text-white hover:bg-gray-700'
                    }`}
                    disabled={currentStep === 1}
                  >
                    Previous
                  </button>
                  
                  {currentStep < 5 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 whitespace-nowrap cursor-pointer"
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 whitespace-nowrap cursor-pointer"
                    >
                      Submit Order
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
              
              <div className="mb-4">
                <img 
                  src={car.image} 
                  alt={car.name}
                  className="w-full h-32 object-cover object-top rounded-lg mb-2"
                />
                <h4 className="font-semibold">{car.name}</h4>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span>Base Price</span>
                  <span>${car.price.toLocaleString()}</span>
                </div>
                {formData.warranty === 'extended' && (
                  <div className="flex justify-between">
                    <span>Extended Warranty</span>
                    <span>+$2,500</span>
                  </div>
                )}
                {formData.warranty === 'premium' && (
                  <div className="flex justify-between">
                    <span>Premium Warranty</span>
                    <span>+$4,500</span>
                  </div>
                )}
                {formData.insurance === 'yes' && (
                  <div className="flex justify-between">
                    <span>Gap Insurance</span>
                    <span>+$1,200</span>
                  </div>
                )}
                {formData.deliveryMethod === 'delivery' && (
                  <div className="flex justify-between">
                    <span>Home Delivery</span>
                    <span>+$299</span>
                  </div>
                )}
                {formData.tradeIn === 'yes' && formData.tradeInValue && (
                  <div className="flex justify-between">
                    <span>Trade-in Credit</span>
                    <span>-${parseInt(formData.tradeInValue).toLocaleString()}</span>
                  </div>
                )}
              </div>
              
              <div className="border-t pt-4">
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>${calculateTotal().toLocaleString()}</span>
                </div>
                
                {formData.paymentMethod === 'finance' && (
                  <div className="mt-2 text-sm text-gray-600">
                    Monthly Payment: ${calculateMonthlyPayment().toFixed(0)}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
