<template>
    <div :class="menu">
      <div class="header">
          <font-awesome-icon :icon="['fas', 'user-secret']" />
          LOGO
      </div>
      <div class="Menuitems">
        <a v-for="item in menuitems.items" :key="item.label" :href="item.link" class="item" v-tooltip="item.label">
          <span class="icon" > <font-awesome-icon :icon="['fa-solid', item.icon]" /></span>
        </a>
      </div>
    </div>
  </template>
  
  <script setup>
  //import { ref } from 'vue';
  import menuitems from './menuitems'; // Asegúrate de que la ruta sea correcta
  </script>
  
  <style scoped>
  a {
    color: #666da4;
    text-decoration: none;
    display: block;
  }
  a:hover {    
    color: #fd5050;
    box-shadow: #fd5050;
  }
  
  .item {
    display: flex;
    align-items: center;
    padding: 10px;
    margin-top: 20%;
    gap: 10px;
  }
  
  .item .icon {
    width: 30px; /* Ajusta el tamaño según tus necesidades */
  }
  
  .menu {
    background-color: #131736;
    color: white;
    height: 100vh;
    transition: width 0.5s;
    font-family: Arial, Helvetica, sans-serif;
    position: fixed;
    left: 0;
    top: 0;
    width: 50px; /* Ancho expandido */
  }
  .header{
    color: white;
    margin: 10px;
  }
  .Menuitems{
    width: 35px;
    margin: 5%;

  }
  </style>