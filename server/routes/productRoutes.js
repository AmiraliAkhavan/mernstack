import express from "express";
import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

const router = express.Router();

// Fetch all products - GET/api/products
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({}); //empty object gives everything

    res.json(products);
  })
);

// Fetch all products - GET/api/products/:id
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error("Product not found");
    }
  })
);

export default router;
