import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
const NewArrivals = () => {
  const newArrivals = [
    {
      _id: "1",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=1",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "2",
      name: "Classic Blue Jeans",
      price: 80,
      images: [
        {
          url: "https://picsum.photos/500/500?random=2",
          altText: "Classic Blue Jeans",
        },
      ],
    },
    {
      _id: "3",
      name: "Casual White T-Shirt",
      price: 25,
      images: [
        {
          url: "https://picsum.photos/500/500?random=3",
          altText: "Casual White T-Shirt",
        },
      ],
    },
    {
      _id: "4",
      name: "Elegant Black Dress",
      price: 150,
      images: [
        {
          url: "https://picsum.photos/500/500?random=4",
          altText: "Elegant Black Dress",
        },
      ],
    },
    {
      _id: "5",
      name: "Comfortable Sneakers",
      price: 90,
      images: [
        {
          url: "https://picsum.photos/500/500?random=5",
          altText: "Comfortable Sneakers",
        },
      ],
    },
    {
      _id: "6",
      name: "Formal Suit",
      price: 300,
      images: [
        {
          url: "https://picsum.photos/500/500?random=6",
          altText: "Formal Suit",
        },
      ],
    },
    {
      _id: "7",
      name: "Summer Hat",
      price: 45,
      images: [
        {
          url: "https://picsum.photos/500/500?random=7",
          altText: "Summer Hat",
        },
      ],
    },
    {
      _id: "8",
      name: "Leather Belt",
      price: 60,
      images: [
        {
          url: "https://picsum.photos/500/500?random=8",
          altText: "Leather Belt",
        },
      ],
    },
  ];

  return (
    <section>
      <div className="container mx-auto text-center mb-10 relative">
        <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
        <p className="text-lg text-gray-600 mb-8">
          Discover the latest styles straight off the runway, freshly added to
          keep your wardrobe on the cutting edge of fashion.
        </p>
        {/* Scroll Btns. */}
        <div className="absolute right-0 bottom-[-30px] flex space-x-2">
          <button className="p-2 rounded border bg-white text-black cursor-pointer">
            <FiChevronLeft className="text-2xl" />
          </button>
          <button className="p-2 rounded border bg-white text-black cursor-pointer">
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
