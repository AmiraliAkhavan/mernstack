const app = express();
import express from "express";
import connectDb from "./config/db.js";
import products from "./data/products.js";
import dotenv from "dotenv";
import colors from "colors";
dotenv.config();

connectDb();

app.get("/", (req, res) => {
  res.send("Api is running");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});
app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server running on port ${PORT}`.yellow.bold));
