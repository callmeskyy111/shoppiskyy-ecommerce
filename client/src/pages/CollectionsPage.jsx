import React, { useEffect, useRef, useState } from "react";
import { FaFilter } from "react-icons/fa";
import FilterSideBar from "../components/Products/FilterSideBar";
import SortOptions from "../components/Products/SortOptions";
import ProductGrid from "../components/Products/ProductGrid";

function CollectionsPage() {
  const [products, setProducts] = useState([]);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const sideBarRef = useRef(null);

  function toggleSideBar() {
    setIsSideBarOpen(!isSideBarOpen);
  }

  function handleClickOutside(evt) {
    // Close sidebar if clicked outside
    if (sideBarRef.current && !sideBarRef.current.contains(evt.target)) {
      setIsSideBarOpen(false);
    }
  }

  useEffect(() => {
    //Add Evt. Listener for clicks
    document.addEventListener("mousedown", handleClickOutside);
    // Clear evt. listeners
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const fetchedProducts = [
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
        },
        {
          _id: 6,
          name: "Comfortable Sneakers",
          price: 90,
          images: [{ url: "https://picsum.photos/500/500?random=7" }],
        },
        {
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
        },
      ];
      setProducts(fetchedProducts);
    }, 1500);
  }, []);
  return (
    <div className="flex flex-col lg:flex-row">
      {/* Mobile Filter Btn */}
      <button
        onClick={toggleSideBar}
        className="lg:hidden border p-2 flex justify-center items-center">
        <FaFilter className="mr-2" />
      </button>
      {/* Filter Sidebar */}
      <div
        ref={sideBarRef}
        className={`${
          isSideBarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto transition-transform duration-400 lg:static lg:translate-x-0`}>
        <FilterSideBar />
      </div>
      <div className="flex-grow-0 p-4">
        <h2 className="text-2xl uppercase mb-4">All Collections</h2>
        {/* Sort Options */}
        <SortOptions />
        {/* Product Grid */}
        <ProductGrid products={products} />
      </div>
    </div>
  );
}

export default CollectionsPage;
