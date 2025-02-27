import React from "react";
import { Link } from "react-router-dom";

function ProductGrid({ products }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product, idx) => (
        <Link key={idx} to={`/product/${product._id}`} className="block">
          <div className="bg-white p-4 rounded-lg">
            <div className="w-full h-96 mb-4">
              <img
                className="h-full h-full object-cover rounded"
                src={product.images[0].url}
                alt={product.images[0].altText || product.name}
              />
            </div>
            <h3 className="text-sm mb-2">{product.name}</h3>
            <p className="text-gray-500 text-sm tracking-tighter font-medium">
              ${product.price}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProductGrid;
