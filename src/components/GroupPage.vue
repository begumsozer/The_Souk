<template>
    <div id="group-content">
      <h2>Create or Join a Group</h2>
      <button @click="createGroup">Create a Group</button>
      <p> </p>
      <button @click="joinGroup">Join a Group</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      async createGroup() {
        // Dispatch action to create a new group
        await this.$store.dispatch('createGroup');
        this.$router.push('/home');  // Redirect to home page
      },
      async joinGroup() {
        // Dispatch action to join an existing group
        await this.$store.dispatch('joinGroup');
        this.$router.push('/home');  // Redirect to home page
      },
    },
  };
  </script>
  
  <style>
#group-content button{
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

#group-content button:hover{
  cursor: pointer;
  border-right: 4px solid rgb(63 63 63);
  border-bottom: 4px solid rgb(63 63 63);
}

  div {
  height: 10; /* ou une autre hauteur relative */
}
#group-content{
  margin-top: 15%;
}

#button{
  width: 5%;
  height: 5%;
}

#button:hover{
  cursor: pointer;
}
</style>
