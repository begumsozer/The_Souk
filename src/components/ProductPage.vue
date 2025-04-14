<template>
    <div id="product-content">
      <h2>Product Management</h2>
      <!-- Form to add a product -->
      <form @submit.prevent="addProduct">
        <input v-model="product.name" type="text" placeholder="Product Name" required />
        <input v-model="product.price" type="number" placeholder="Price" required /><br><br>
        <textarea v-model="product.description" placeholder="Product Description" required></textarea><br><br>
        <button type="submit">Add Product</button>
      </form><br><br><br>
  
      <!-- Message to display success or failure -->
      <div v-if="message" class="message">{{ message }}</div>
  
      <h3>Product List</h3>
      <ul>
        <li v-for="prod in products" :key="prod.id">
          {{ prod.name }} - ${{ prod.price }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        // Product data bound to the form
        product: {
          name: '',
          price: '',
          description: ''
        },
        message: '',  // Message for success or failure
        products: []  // List of products
      };
    },
    methods: {
      // Method to add a product
      async addProduct() {
        try {
          // Sending a POST request to the backend API to add the product
          const response = await axios.post('http://localhost:5000/api/products/add', this.product);
  
          // On success, add the newly created product to the product list
          this.products.push(response.data);
          this.message = 'Product added successfully!';
          this.clearForm();  // Clear the form after successful submission
        } catch (error) {
          // Log error and show failure message
          console.error('Error:', error.response ? error.response.data : error.message);
          this.message = 'Failed to add product. Please try again.';
        }
      },
  
      // Method to clear the form after product is added
      clearForm() {
        this.product.name = '';
        this.product.price = '';
        this.product.description = '';
      },
  
      // Method to fetch products (this can be called on page load or after adding a product)
      async fetchProducts() {
        try {
          const response = await axios.get('http://localhost:5000/api/products');
          this.products = response.data;
        } catch (error) {
          console.error('Failed to fetch products:', error);
        }
      }
    },
    created() {
      // Fetch existing products when the page is loaded
      this.fetchProducts();
    }
  };
  </script>
  
  <style>
#product-content textarea{
  width: 33%;
  height: 50%;
  border: 1px solid #ccc;
  border-radius: 8px; /* Ajustez la valeur pour arrondir */
  padding: 10px;
  box-sizing: border-box;
}

#product-content button{
  color: white;
  background-color: blueviolet;
  border-color: blueviolet;
  border-radius: 5%;
  width: 10%;
  height: 13%;
  border: 1px solid #ccc;
  border-radius: 8px; /* Ajustez la valeur pour arrondir */
  padding: 5px;
  box-sizing: border-box;
}

#product-content button:hover{
  cursor: pointer;
  border-right: 4px solid rgb(63 63 63);
  border-bottom: 4px solid rgb(63 63 63);
}

  div {
  height: 10; /* ou une autre hauteur relative */
}
#product-content{
  margin-top: 11%;
}

  #button{
    width: 5%;
    height: 5%;
  }
  
  #button:hover{
    cursor: pointer;
  }

  .message {
    color: red;
    font-weight: bold;
  }
  </style>
  
