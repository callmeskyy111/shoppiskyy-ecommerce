import React from "react";
import { motion } from "framer-motion";
import mensCollectionImg from "../../assets/mens-collection.webp";
import womensCollectionImg from "../../assets/womens-collection.webp";
import { Link } from "react-router-dom";

function GenderCollection() {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto flex flex-col md:flex-row gap-8">
        {/* WOMEN'S COLLECTION */}
        <div className="relative flex-1 overflow-hidden">
          <motion.img
            whileHover={{ scale: 1.1 }} // Adjust the scale value as needed
            transition={{ duration: 1.0 }}
            src={womensCollectionImg}
            alt="women's-collection"
            className="w-full h-[700px] object-cover"
            initial="hidden"
            animate="visible"
            variants={variants}
            //transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 p-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Women's Collection
            </h2>
            <Link
              to="/collections/all?gender=Women"
              className="text-gray-900 underline">
              Shop Now
            </Link>
          </div>
        </div>
        {/* MEN'S COLLECTION */}
        <div className="relative flex-1 overflow-hidden">
          <motion.img
            whileHover={{ scale: 1.1 }} // Adjust the scale value as needed
            transition={{ duration: 1.0 }} // Adjust the duration as needed
            src={mensCollectionImg}
            alt="men's-collection"
            className="w-full h-[700px] object-cover"
            initial="hidden"
            animate="visible"
            variants={variants}
            //transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 p-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Men's Collection
            </h2>
            <Link
              to="/collections/all?gender=Men"
              className="text-gray-900 underline">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GenderCollection;
