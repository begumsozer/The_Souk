<template>
    <div id="search-content">
      <h2>Search for Products</h2>
      <input v-model="searchQuery" placeholder="Search" />
      <button @click="searchProducts">Search</button>
      <div v-if="products.length">
        <div v-for="product in products" :key="product.id">
          <p>{{ product.name }} - {{ product.price }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchQuery: '',
        products: [],
      };
    },
    methods: {
      async searchProducts() {
        const result = await this.$store.dispatch('searchProducts', this.searchQuery);
        this.products = result;
      },
    },
  };
  </script>
  
  <style>
  div {
  height: 10;
}
#search-content{
  margin-top: 15%;
}

#search-content input{
  height: 10px;
}

#search-content button{
  color: white;
  background-color: blueviolet;
  border-color: blueviolet;
  width: 5%;
  height: 33px;
  border: 1px solid #ccc;
  border-radius: 8px; /* Ajustez la valeur pour arrondir */
  padding: 5px;
  box-sizing: border-box;
}

#search-content button:hover{
  cursor: pointer;
  border-right: 4px solid rgb(63 63 63);
  border-bottom: 4px solid rgb(63 63 63);
}

  #button{
    width: 5%;
    height: 5%;
  }
  
  #button:hover{
    cursor: pointer;
  }
</style>
