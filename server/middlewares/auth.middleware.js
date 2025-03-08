import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";

//Middleware to protect routes
async function protectRoute(req, res, next) {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await userModel.findById(decoded.user.id).select("-password"); //Exclude password
      next();
    } catch (err) {
      console.error(err);
      return res
        .status(401)
        .json({ success: false, message: err.message + "🔴" });
    }
  } else {
    return res.status(401).json({
      success: false,
      message: "No token provided, authorization denied 🔴",
    });
  }
}


export default protectRoute;