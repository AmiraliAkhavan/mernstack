const app = express();
import express from "express";
import connectDb from "./config/db.js";
import dotenv from "dotenv";
import { notFound, errorHandler } from "./middleware/errMiddleware.js";
import colors from "colors";
import productRoutes from "./routes/productRoutes.js";
dotenv.config();

connectDb();

app.get("/", (req, res) => {
  res.send("Api is running");
});

app.use("/api/products", productRoutes);

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server running on port ${PORT}`.yellow.bold));
