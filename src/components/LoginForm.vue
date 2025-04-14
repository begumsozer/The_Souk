<!-- src/components/LoginPage.vue -->
<template>
    <div id="login-content">
      <h1>Welcome back to The Souk</h1>
      <h2>Login</h2>
      <form @submit.prevent="handleLogin">
        <input v-model="username" placeholder="Username" required /><br>
        <input v-model="password" type="password" placeholder="Password" required /><br><br>
        <button type="submit" id="login-button">Login</button>
      </form>
      <p v-if="errorMessage" style="color: red">{{ errorMessage }}</p>
      <p>Don't have an account? <router-link to="/register">New User</router-link></p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        errorMessage: '',
      };
    },
    methods: {
      handleLogin() {
        // Dispatch login action with username and password
        this.$store
          .dispatch('login', { username: this.username, password: this.password })
          .then(() => {
            // Check if login was successful
            if (this.$store.getters.isAuthenticated) {
              this.$router.push('/home');  // Redirect to home page
            } else {
              this.errorMessage = 'Incorrect username or password';
            }
          });
      },
    },
    computed: {
      isAuthenticated() {
        return this.$store.getters.isAuthenticated; // Get authentication status from Vuex
      },
    },
  };
  </script>
  
  <style>
  input {
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 8px;
  width: 15%;
  transition: all 0.3s ease;
}

input:focus {
  border-color: blueviolet;
  box-shadow: 0 0 5px rgba(138, 43, 226, 0.7);
  transform: scale(1.05);
}

#login-button{
  background-color: blueviolet; 
  color: white; 
  border-radius: 10%; 
  border-color: blueviolet;
  border: 1px solid #ccc;
  border-radius: 8px; /* Ajustez la valeur pour arrondir */
  padding: 10px;
  box-sizing: border-box;
}

#login-button:hover{
  cursor: pointer;
  border-right: 4px solid rgb(63 63 63);
  border-bottom: 4px solid rgb(63 63 63);
}

  div {
  height: 10; /* ou une autre hauteur relative */
}
#login-content{
  margin-top: 15%;
}

  #button{
    width: 5%;
    height: 5%;
  }
  
  #button:hover{
    cursor: pointer;
  }
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
</style>
