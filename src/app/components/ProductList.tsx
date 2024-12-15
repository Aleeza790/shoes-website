import React from 'react';

type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
  availableSizes: number[];
  colors: string[];
  comfort: string;
};

type Props = {
  products: Product[];
};

const ProductList: React.FC<Props> = ({ products }) => {
  return (
    <div className="mb-6">
      <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">Product List</button>
      <div className="mt-4 space-y-4">
        {products.map((product) => (
          <div key={product.id} className="flex items-center space-x-4">
            <img className="w-16 h-16 object-cover" src={product.image} alt={product.name} />
            <div>
              <p>{product.name}</p>
              <p className="text-gray-500">Sizes: {product.availableSizes.join(', ')}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
