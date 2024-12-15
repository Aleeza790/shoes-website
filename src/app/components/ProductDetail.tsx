// ProductDetails.tsx
import React from 'react';

// Define the type for product prop
interface ProductDetailsProps {
  product: {
    id: number;
    name: string;
    price: string;
    image: string;
    availableSizes: number[];
    colors: string[];
    comfort: string;
    description: string;
  } | null;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  // Check if the product is null
  if (!product) {
    return <p>Please select a product to view its details.</p>;
  }

  return (
    <div>
      <h2 className="text-xl font-semibold">{product.name}</h2>
      <img className="w-full h-64 object-cover" src={product.image} alt={product.name} />
      <p className="text-gray-700">{product.price}</p>
      <p className="text-gray-600 mt-2">{product.description}</p>
      <p><strong>Comfort: </strong>{product.comfort}</p>
      <p><strong>Available Sizes: </strong>{product.availableSizes.join(', ')}</p>
      <p><strong>Colors: </strong>{product.colors.join(', ')}</p>
    </div>
  );
};

export default ProductDetails;
