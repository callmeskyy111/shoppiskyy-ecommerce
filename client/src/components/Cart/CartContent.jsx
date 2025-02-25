import React from "react";
import { RiDeleteBin3Line } from "react-icons/ri";

function CartContent() {
  //todo:- static dummy data for now.
  const cartProducts = [
    {
      productId: 1,
      name: "T-Shirt",
      size: "XL",
      color: "Red",
      qty: 1,
      price: 15,
      image: "https://picsum.photos/200?random=1",
    },
    {
      productId: 2,
      name: "Jeans",
      size: "32",
      color: "Blue",
      qty: 2,
      price: 40,
      image: "https://picsum.photos/200?random=2",
    },
    {
      productId: 3,
      name: "Jacket",
      size: "L",
      color: "Black",
      qty: 1,
      price: 60,
      image: "https://picsum.photos/200?random=3",
    },
    {
      productId: 4,
      name: "Sneakers",
      size: "10",
      color: "White",
      qty: 1,
      price: 80,
      image: "https://picsum.photos/200?random=4",
    },
  ];

  return (
    <div>
      {cartProducts.map((product, idx) => {
        return (
          <div
            key={idx}
            className="flex items-start justify-between py-4 border-b">
            <div className="flex items-center">
              <img
                className="w-20 h-24 object-cover mr-4 rounded"
                src={product.image}
                alt={product.name}
              />
              <div>
                <h3>{product.name}</h3>
                <p className="text-sm text-gray-500">
                  size: {product.size} | color: {product.color}
                </p>
                <div className="flex items-center mt-2">
                  <button className="border rounded px-2 py-1 text-xl font-medium">
                    -
                  </button>
                  <span className="mx-4">{product.qty}</span>
                  <button className="border rounded px-2 py-1 text-xl font-medium">
                    +
                  </button>
                </div>
              </div>
              <p>${product.price.toLocaleString()}</p>
              <button>
                <RiDeleteBin3Line className="h-6 w-6 mt-2 text-red-600"/>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CartContent;
