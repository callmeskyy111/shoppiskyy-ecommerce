import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";

export async function registerUser(req, res) {
  const { name, email, password } = req.body;
  try {
    // Check if user already exists
    const userExists = await userModel.findOne({ email });
    if (userExists) {
      return res.status(400).json({
        success: false,
        message: "User already exists. 🔴",
      });
    }

    // Create a new user instance (BUT DON'T SAVE YET!)
    const newUser = new userModel({ name, email, password });

    // Generate JWT Token BEFORE saving the user
    const payload = {
      user: { id: newUser._id, name: newUser.name, email: newUser.email },
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "5h",
    });

    // Now SAVE the user only if JWT generation is successful
    await newUser.save();

    // Send response with token and user info (excluding password)
    return res.status(201).json({
      success: true,
      message: "User successfully registered. ✅",
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
      },
      token: token,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: err.message + " 🔴",
    });
  }
}
