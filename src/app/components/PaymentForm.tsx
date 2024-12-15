// 'use client';
import React, { useState } from 'react';

const PaymentForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<string>('');
  const [amount, setAmount] = useState<number | string>('');
  const [error, setError] = useState<string>('');

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!name || !paymentMethod || !amount || isNaN(Number(amount))) {
      setError('Please fill all fields and ensure amount is a valid number.');
      return;
    }

    // Reset error and show the payment info
    setError('');
    console.log('Payment Details:', { name, paymentMethod, amount });
    
    // Here you could send the data to a backend API or do something with it
    alert(`Payment of ${amount} has been processed for ${name} using ${paymentMethod}.`);
  };

  return (
    <div className="w-full max-w-xs mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">Payment Form</h2>
      {error && <p className="text-red-500 text-center">{error}</p>}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mt-2 p-2 border border-gray-300 rounded-md"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700">Payment Method</label>
          <select
            id="paymentMethod"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full mt-2 p-2 border border-gray-300 rounded-md"
            required
          >
            <option value="">Select a payment method</option>
            <option value="Credit Card">Credit Card</option>
            <option value="PayPal">PayPal</option>
            <option value="Bank Transfer">Bank Transfer</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full mt-2 p-2 border border-gray-300 rounded-md"
            placeholder="Enter amount"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Submit Payment
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
