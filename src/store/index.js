// src/store/index.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    user: null, // Store user data
    isAuthenticated: false, // To track if the user is authenticated
  },
  mutations: {
    setUser(state, user) {
      state.user = user; // Store the user object
      state.isAuthenticated = true; // Set authenticated status
    },
    logout(state) {
      state.user = null; // Clear the user data
      state.isAuthenticated = false; // Set authentication status to false
    },
  },
  actions: {
    login({ commit }, { username, password }) {
      // Here, you can check the password or perform an API request
      if (password === 'password123') {  // Replace with your authentication logic
        const user = { username };  // Example user object
        commit('setUser', user); // Commit user to the store
        console.log('Login successful');
      } else {
        console.log('Incorrect password');
      }
    },
    logout({ commit }) {
      commit('logout'); // Commit logout action
    },
  },
  getters: {
    getUser(state) {
      return state.user; // Getter to access the user data
    },
    isAuthenticated(state) {
      return state.isAuthenticated; // Getter to check authentication status
    },
  },
});
