// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const productsRoute = require('./products');  // Correct path to products.js
const app = express();

const cors = require('cors');
app.use(cors());  // Enable CORS for all routes

// Middleware to parse JSON request bodies
app.use(express.json());  // For parsing application/json
app.use(bodyParser.json());  // For parsing application/json

// Use the products route for handling product-related API requests
app.use('/api/products', productsRoute);  // This makes the /api/products route available

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
