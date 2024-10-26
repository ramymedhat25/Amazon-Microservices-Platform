const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    stock: { type: Number, default: 0 },  
    imageUrl: { type: String },           
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);