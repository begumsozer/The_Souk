// backend/routes/products.js
const express = require('express');
const router = express.Router();

let products = [];  // In-memory array to store products

// POST request to add a new product
router.post('/add', (req, res) => {
  const { name, price, description } = req.body;

  if (!name || !price || !description) {
    return res.status(400).send('Missing required fields');
  }

  const newProduct = {
    id: products.length + 1,
    name,
    price,
    description
  };

  products.push(newProduct);  // Add the new product
  res.status(201).json(newProduct);  // Return the newly added product
});

// GET request to fetch all products
router.get('/', (req, res) => {
  res.status(200).json(products);  // Return all products
});

module.exports = router;
