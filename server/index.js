import express from "express";
import "dotenv/config";
import cors from "cors";
import connectToDB from "./connectDb.js";
import userRouter from "./routes/user.routes.js";
import productRouter from "./routes/product.routes.js";

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectToDB();

const PORT = process.env.PORT || 9000;

// API routes/endpoints
app.use("/api/v1/users", userRouter);
app.use("/api/v1/products", productRouter);

app.get("/", (req, res) => {
  res.send("<h2>API is working... ✅</h2>");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT} 🛜`));

//todo: 08:07:10 ⏱️
