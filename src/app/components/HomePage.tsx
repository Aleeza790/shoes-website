// Mark this file as a client-side component
'use client';

import React, { useState } from 'react';
import ProductDetails from './ProductDetail'; // Adjust the import path if needed
import PaymentForm from './PaymentForm';  // Import PaymentForm component

const HomePage: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null); // Track selected product for details

  const products = [
    {
      id: 1,
      name: 'NIKE🤩',
      price: '$50',
      image: '/nike.jpg',
      availableSizes: [7, 8, 9, 10],
      colors: ['Black', 'Red', 'Blue'],
      comfort: 'Very Comfortable',
      description: 'Made for ultimate comfort and durability. Perfect for both casual and athletic wear.',
    },
    {
      id: 2,
      name: 'ADIDAS✌',
      price: '$60',
      image: '/adidas.jpg',
      availableSizes: [7, 8, 9, 10],
      colors: ['Brown', 'Grey'],
      comfort: 'Moderately Comfortable',
      description: 'Classic style with a modern touch. Provides a snug fit with a stylish design.',
    },
    {
      id: 3,
      name: 'PUMA✨',
      price: '$70',
      image: '/puma.jpg',
      availableSizes: [7, 8, 9, 10],
      colors: ['White', 'Black'],
      comfort: 'Highly Comfortable',
      description: 'Engineered for both performance and style. Soft cushioning and breathable materials.',
    },
  ];

  // Handle product selection for product details view
  const handleProductSelect = (productId: number) => {
    setSelectedProduct(productId);
  };

  // Get selected product details for the ProductDetails component
  const selectedProductDetails = selectedProduct
    ? products.find((product) => product.id === selectedProduct)
    : null;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Shoes Store</h1>

      <div className="flex space-x-8">
        <div className="flex flex-wrap gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="max-w-xs bg-white p-4 shadow-lg rounded-lg"
              onClick={() => handleProductSelect(product.id)} // Select product to view details
            >
              <img className="w-full h-64 object-cover" src={product.image} alt={product.name} />
              <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
              <p className="text-gray-700">{product.price}</p>
              <p className="text-gray-600 mt-2">{product.description}</p>  {/* Added product description */}
            </div>
          ))}
        </div>

        {/* Conditional rendering */}
        <div className="w-80 bg-gray-50 p-6 rounded-lg shadow-lg">
          {selectedProductDetails ? (
            <ProductDetails product={selectedProductDetails} />
          ) : (
            <p>Select a product to view details</p>
          )}
        </div>
      </div>

      {/* Add Payment Form below products */}
      <div className="mt-8">
        <PaymentForm />
      </div>
    </div>
  );
};

export default HomePage;
