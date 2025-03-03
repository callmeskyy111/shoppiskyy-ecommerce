import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import CartContent from "../Cart/CartContent";
import { useNavigate } from "react-router-dom";

function CartDrawer({ drawerOpen, toggleCartDrawer }) {
  const navigate = useNavigate()
  function handleCheckout(){
    toggleCartDrawer();
    navigate('/checkout');
  }
  return (
    <div
      className={`fixed top-0 right-0 w-3/4 sm:w-[30rem] md:w-1/4 h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${
        drawerOpen ? "translate-x-0" : "translate-x-full"
      }`}>
      {/* CLOSE BTN. */}
      <div className="flex justify-end p-4">
        <button onClick={toggleCartDrawer}>
          <IoMdClose className="h-6 w-6 text-gray-600 cursor-pointer" />
        </button>
      </div>
      {/* CART CONTENT WITH SCROLLABLE AREA */}
      <div className="flex-grow p-4 overflow-auto">
        <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
        {/* COMPONENT FOR CART-CONTENT */}
        <CartContent/>
      </div>
      {/* CHECKOUT BTN. */}
      <div className="p-4 bg-white sticky bottom-0">
    <button onClick={handleCheckout} className="w-full bg-gray-950 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition cursor-ointer">CHECKOUT</button>
    <p className="text-sm tracking-tighter text-gray-500 mt-2 text-center">Shipping, taxes and discount codes calculated at checkout.</p>
      </div>
    </div>
  );
}

export default CartDrawer;
