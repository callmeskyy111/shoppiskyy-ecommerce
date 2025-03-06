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

export async function loginUser(req, res) {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials. 🔴",
      });
    }

    // Check if the password is correct (Ensure matchPassword is implemented in the model)
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid password! 🔴",
      });
    }

    // Generate JWT Token
    const payload = {
      user: { id: user._id, name: user.name, email: user.email },
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "5h",
    });

    // Send response with token and user info (excluding password)
    return res.json({
      success: true,
      message: "User successfully logged in. ✅",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token: token,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: err.message + " 🔴",
    });
  }
}

export async function getLoggedInUserProfile(req,res) {
  //protected route
  res.json(req.user);
}
