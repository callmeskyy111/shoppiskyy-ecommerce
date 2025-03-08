import mongoose from "mongoose";
import "dotenv/config";
import productModel from "./models/product.model.js";
import userModel from "./models/user.model.js";
import products from "./data/products.js"; //from data.js

// Connect to the DB
mongoose.connect(process.env.MONGODB_URI);

async function seedData() {
  try {
    // Clear existing data
    await productModel.deleteMany({});
    await userModel.deleteMany({});

    // Create a default Admin-User
    const createdUser = await userModel.create({
      name: "Admin User",
      email: "admin@example.com",
      password: "password123",
      role: "admin",
    });

    // Assign the admin user ID to each product
    const userID = createdUser._id;

    // ✅ Fix: Use 'products' instead of 'sampleProducts'
    const sampleProducts = products.map((product) => {
      return { ...product, user: userID };
    });

    // Insert Data into the DB
    await productModel.insertMany(sampleProducts);
    console.log("Data seeded successfully! ✅");
    process.exit(); // ✅ Exit after seeding
  } catch (err) {
    console.error("Failed to seed data 🔴: ", err);
    process.exit(1);
  }
}

seedData();
