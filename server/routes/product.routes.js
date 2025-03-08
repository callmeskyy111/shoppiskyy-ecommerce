import { Router } from "express";
import protectRoute from "../middlewares/auth.middleware.js";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getBestSeller,
  getNewArrivals,
  getProductById,
  getSimilarProducts,
  updateProduct,
} from "../controllers/product.controller.js";
import checkAdmin from "../middlewares/checkAdmin.js";

const productRouter = Router();

productRouter.post("/create", protectRoute, checkAdmin, createProduct);
productRouter.put("/update/:id", protectRoute, checkAdmin, updateProduct);
productRouter.delete("/delete/:id", protectRoute, checkAdmin, deleteProduct);
productRouter.get("/best-seller", getBestSeller); //must be called before get-single product.
productRouter.get("/new-arrivals", getNewArrivals); //must be called before get-single product.

productRouter.get("/:id", getProductById);
productRouter.get("/similar/:id", getSimilarProducts);
productRouter.get("/", getAllProducts);

export default productRouter;
