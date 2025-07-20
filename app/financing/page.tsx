
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function FinancingPage() {
  const [loanAmount, setLoanAmount] = useState('50000');
  const [downPayment, setDownPayment] = useState('10000');
  const [loanTerm, setLoanTerm] = useState('60');
  const [creditScore, setCreditScore] = useState('excellent');
  const [monthlyIncome, setMonthlyIncome] = useState('5000');

  const calculateMonthlyPayment = () => {
    const principal = parseInt(loanAmount) - parseInt(downPayment);
    const rates = {
      excellent: 0.035,
      good: 0.045,
      fair: 0.065,
      poor: 0.085
    };
    
    const annualRate = rates[creditScore as keyof typeof rates];
    const monthlyRate = annualRate / 12;
    const numPayments = parseInt(loanTerm);
    
    const monthlyPayment = (principal * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
                          (Math.pow(1 + monthlyRate, numPayments) - 1);
    
    return monthlyPayment;
  };

  const getInterestRate = () => {
    const rates = {
      excellent: 3.5,
      good: 4.5,
      fair: 6.5,
      poor: 8.5
    };
    return rates[creditScore as keyof typeof rates];
  };

  const loanOptions = [
    {
      title: 'New Car Loan',
      rate: '3.5% - 6.5%',
      term: '12 - 84 months',
      features: ['Competitive rates', 'Flexible terms', 'Quick approval', 'No prepayment penalty']
    },
    {
      title: 'Used Car Loan',
      rate: '4.5% - 8.5%',
      term: '12 - 72 months',
      features: ['Lower rates for newer cars', 'Extended warranties available', 'Fast processing', 'Online application']
    },
    {
      title: 'Refinance Loan',
      rate: '3.0% - 7.0%',
      term: '12 - 60 months',
      features: ['Lower monthly payments', 'Reduce interest rate', 'Cash out option', 'No fees']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Auto Financing Made Simple
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Get pre-approved for your car loan in minutes with competitive rates and flexible terms
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Financing Calculator
              </h2>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Loan Amount
                    </label>
                    <input
                      type="number"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="50000"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Down Payment
                    </label>
                    <input
                      type="number"
                      value={downPayment}
                      onChange={(e) => setDownPayment(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="10000"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Loan Term
                    </label>
                    <select
                      value={loanTerm}
                      onChange={(e) => setLoanTerm(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-8"
                    >
                      <option value="36">36 months</option>
                      <option value="48">48 months</option>
                      <option value="60">60 months</option>
                      <option value="72">72 months</option>
                      <option value="84">84 months</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Credit Score
                    </label>
                    <select
                      value={creditScore}
                      onChange={(e) => setCreditScore(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-8"
                    >
                      <option value="excellent">Excellent (750+)</option>
                      <option value="good">Good (700-749)</option>
                      <option value="fair">Fair (650-699)</option>
                      <option value="poor">Poor (Below 650)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Monthly Income
                    </label>
                    <input
                      type="number"
                      value={monthlyIncome}
                      onChange={(e) => setMonthlyIncome(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="5000"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Your Loan Estimate
              </h2>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="space-y-6">
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-2">Estimated Monthly Payment</p>
                    <p className="text-4xl font-bold text-blue-600">
                      ${calculateMonthlyPayment().toFixed(0)}/month
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600 mb-1">Interest Rate</p>
                      <p className="text-lg font-semibold">{getInterestRate()}% APR</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600 mb-1">Loan Amount</p>
                      <p className="text-lg font-semibold">${(parseInt(loanAmount) - parseInt(downPayment)).toLocaleString()}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600 mb-1">Total Interest</p>
                      <p className="text-lg font-semibold">${(calculateMonthlyPayment() * parseInt(loanTerm) - (parseInt(loanAmount) - parseInt(downPayment))).toFixed(0)}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600 mb-1">Total Cost</p>
                      <p className="text-lg font-semibold">${(calculateMonthlyPayment() * parseInt(loanTerm) + parseInt(downPayment)).toFixed(0)}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 whitespace-nowrap cursor-pointer">
                      Get Pre-Approved
                    </button>
                    <button className="w-full bg-gray-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-700 whitespace-nowrap cursor-pointer">
                      Apply for Financing
                    </button>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-sm text-gray-600">
                      * Rates and terms are subject to credit approval
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Financing Options
            </h2>
            <p className="text-xl text-gray-600">
              Choose the loan that best fits your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {loanOptions.map((option, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                <p className="text-2xl font-bold text-blue-600 mb-2">{option.rate}</p>
                <p className="text-gray-600 mb-4">{option.term}</p>
                <ul className="space-y-2">
                  {option.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <div className="w-4 h-4 flex items-center justify-center mr-2">
                        <i className="ri-check-line text-green-600"></i>
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-6 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 whitespace-nowrap cursor-pointer">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Financing?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-timer-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Quick Approval</h3>
              <p className="text-gray-600">Get approved in minutes, not days</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-percent-line text-2xl text-green-600"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Competitive Rates</h3>
              <p className="text-gray-600">Low interest rates for qualified buyers</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-settings-line text-2xl text-purple-600"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Flexible Terms</h3>
              <p className="text-gray-600">Choose terms that fit your budget</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-customer-service-line text-2xl text-orange-600"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Expert Support</h3>
              <p className="text-gray-600">Dedicated financing specialists</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
