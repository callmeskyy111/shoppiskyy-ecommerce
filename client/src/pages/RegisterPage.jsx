import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import registerImg from "../assets/register.webp";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  async function handleSubmit(evt) {
    evt.preventDefault();
    console.log(
      `User registered successfully ✅.. email:${email}, password:${password}, name:${name}`
    );
    setEmail("");
    setPassword("");
    setName("");
  }

  return (
    <div className="flex">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12">
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0 }}
          className="w-full max-w-md bg-white p-8 rounded-lg border shadow-sm">
          <div className="flex justify-center mb-6">
            <h2 className="text-xl font-medium">ShoppiSkyy🛒</h2>
          </div>
          <h2 className="text-2xl font-bold text-center mb-6">Hey there! 👋🏻</h2>
          <p className="text-center mb-6">
            Enter username, emial and password to register
          </p>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Username</label>
            <motion.input
              whileFocus={{ scale: 1.05, borderColor: "#000" }}
              transition={{ duration: 0.3 }}
              type="text"
              value={name}
              onChange={(evt) => setName(evt.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter username/name.."
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Email</label>
            <motion.input
              whileFocus={{ scale: 1.05, borderColor: "#000" }}
              transition={{ duration: 0.3 }}
              type="email"
              value={email}
              onChange={(evt) => setEmail(evt.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter your email address.."
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Password</label>
            <motion.input
              whileFocus={{ scale: 1.05, borderColor: "#000" }}
              transition={{ duration: 0.3 }}
              className="w-full p-2 border rounded"
              placeholder="Enter your password..."
              type="password"
              value={password}
              onChange={(evt) => setPassword(evt.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white p-2 rounded-lg font-semibold hover:bg-gray-800 transition hover:cursor-pointer">
            Sign Up ✅
          </button>
          <p className="mt-6 text-center text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Sign In
            </Link>
          </p>
        </motion.form>
      </div>
      <div className="hidden md:block w-1/2 bg-gray-800">
        <div className="h-full flex flex-col justify-center items-center overflow-hidden">
          <motion.img
            whileHover={{ scale: 1.05 }} // Adjust the scale value as needed
            transition={{ duration: 0.5 }} // Adjust the duration as needed
            src={registerImg}
            alt="Login-Image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            // transition={{ duration: 1 }}
            className="h-[750px] w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
