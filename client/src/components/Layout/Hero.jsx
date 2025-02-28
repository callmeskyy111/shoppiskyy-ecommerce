import React from "react";
import { motion } from "framer-motion";
import heroImg from "../../assets/shoppiskyy-hero.webp";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative">
      <img
        src={heroImg}
        alt="ShoppiSkyy-HeroSection-Img"
        className="w-full h-[400px] md:h-[600px] lg:h-[750px] object-cover"
      />
      <div className="absolute inset-0 bg-black/5 flex items-center justify-center">
        <motion.div
          className="text-center text-white p-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.3, // Increase duration for a slower effect
            //delay: 0.0, // Add delay before the animation starts
            ease: [0.42, 0, 0.58, 1], // Custom cubic-bezier easing for a smooth effect
          }}>
          <h1 className="text-4xl md:text-9xl font-bold tracking-tighter uppercase mb-4">
            Vacation <br /> Ready
          </h1>
          <p className="text-sm tracking-tighter md:text-lg mb-6">
            Explore our vacation-ready outfits with fast worldwide shipping.
          </p>
          <Link
            to="#"
            className="bg-white text-gray-950 px-6 py-2 rounded-sm text-lg">
            Shop Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
