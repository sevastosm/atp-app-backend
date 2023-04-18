import mongoose from "mongoose";

// To add my user scema ...

const ProductsSchema = new mongoose.Schema(
  {
    name: String,
    by: String,
    energy: String,
    fat: String,
    saturated_fat: String,
    cabs: String,
    sugar: String,
    edible: String,
    protein: String,
    salt: String,
    category: String,
  },
  { timestamps: true }
);

const Products = mongoose.model("Products", ProductsSchema);
export default Products;
