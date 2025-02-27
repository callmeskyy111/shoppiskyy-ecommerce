import React from "react";
import Hero from "../components/Layout/Hero";
import GenderCollection from "../components/Products/GenderCollection";
import NewArrivals from "../components/Products/NewArrivals";
import ProductDetails from "../components/Products/ProductDetails";
import ProductGrid from "../components/Products/ProductGrid";
import FeaturedCollections from "../components/Products/FeaturedCollections";

const placeHolderProducts = [
  {
    _id: 1,
    name: "Printed T-Shirt",
    price: 80,
    images: [{ url: "https://picsum.photos/500/500?random=2" }],
  },
  {
    _id: 2,
    name: "Classic Jeans",
    price: 80,
    images: [{ url: "https://picsum.photos/500/500?random=3" }],
  },
  {
    _id: 3,
    name: "Leather Jacket",
    price: 120,
    images: [{ url: "https://picsum.photos/500/500?random=4" }],
  },
  {
    _id: 4,
    name: "Stylish Pants",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500?random=5" }],
  },
  {
    _id: 5,
    name: "Sleek Sneakers",
    price: 150,
    images: [{ url: "https://picsum.photos/500/500?random=6" }],
  },{
    _id: 6,
    name: "Comfortable Sneakers",
    price: 90,
    images: [{ url: "https://picsum.photos/500/500?random=7" }],
  },{
    _id: 7,
    name: "Cotton Shirt",
    price: 60,
    images: [{ url: "https://picsum.photos/500/500?random=8" }],
  },
  {
    _id: 8,
    name: "Leather Belt",
    price: 60,
    images: [{ url: "https://picsum.photos/500/500?random=9" }],
  }
];

function HomePage() {
  return (
    <div>
      <Hero />
      <GenderCollection />
      <NewArrivals />
      <h2 className="text-3xl text-center font-bold mb-4">Best Seller</h2>
      <ProductDetails />
      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-bold mb-4">
          Top-Wears For Women
        </h2>
        <ProductGrid products={placeHolderProducts} />
      </div>
      <FeaturedCollections/>
    </div>
  );
}

export default HomePage;
