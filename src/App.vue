<template>
    <div>
      <h1 @click="goToHomePage" style="cursor: default;" id="title">TheSouk</h1>
      <div class="header-buttons">
        <button @click="goToLoginPage">Login</button>
        <span class="separator">|</span>
        <button @click="goToRegisterPage">New User</button>
      </div>

      <div class="top-left-navigation">
        <img src="./components/Logo.png" alt="button" id="button" @click="goToHomePage">
        <p @click="goToProductPage">My Products</p>
        <p @click="goToGroupPage">Groups</p>
        <p @click="goToSearchPage">Browse</p>
        <p @click="goToAboutPage">About</p>
      </div>
      <!-- This is where the matched route component will be rendered -->
      <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: 'App',

  methods: {
      goToHomePage() {
        this.$router.push('/');  // Navigate to the home page
      },
      goToAboutPage() {
        this.$router.push('/about');  // Navigate to the about page
      },
      goToLoginPage() {
        this.$router.push('/login');  // Navigate to the login page
      },
      goToRegisterPage() {
        this.$router.push('/register');  // Navigate to the registration page
      },
      goToProductPage() {
        this.$router.push('/product');  // Navigate to the product page
      },
      goToGroupPage() {
        this.$router.push('/group');  // Navigate to the group page
      },
      goToSearchPage() {
        this.$router.push('/search');  // Navigate to the search page
      },
    },
};
</script>

<style>

  /* Style global pour les boutons et les liens */
  .top-left-navigation a,.top-left-navigation p,
  .header-buttons > button {
    text-decoration: none;
    border: none;
    background: none;
    color: #000; /* Couleur du texte */
    font-size: 14px; /* Taille de police uniforme */
    font-family: Arial, sans-serif; /* Police uniforme */
    cursor: pointer;
    padding: 5px 10px; /* Espacement uniforme */
    display: flex;
    align-items: center; /* Alignement vertical uniforme */
  }

  .top-left-navigation a:hover,
  .header-buttons > button:hover {
    text-decoration: underline;
  }

  /* Style pour le conteneur de navigation en haut à gauche */
  .top-left-navigation {
    display: flex;
    gap: 15px; /* Espacement entre les éléments */
    position: absolute;
    top: 20px; /* Alignement à la même hauteur que les boutons de droite */
    left: 20px; /* Marges pour le positionnement */
  }

  /* Style pour le conteneur de navigation en haut à droite */
  .header-buttons {
    position: absolute;
    top: 20px; /* Alignement à la même hauteur que les boutons de gauche */
    right: 20px;
    display: flex;
    align-items: center;
  }

  /* Style pour les boutons individuels dans le conteneur de droite */
  .header-buttons > button {
    border: none;
    background: none;
    color: #000; /* Couleur du texte */
    font-size: 14px;
    cursor: pointer;
    padding: 5px 10px; /* Espacement uniforme avec les liens */
  }

  .header-buttons > button:hover {
    text-decoration: underline;
  }

  /* Style pour le séparateur "|" */
  .header-buttons > .separator {
    margin: 0 5px;
    color: #aaa;
    font-size: 14px;
  }

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
