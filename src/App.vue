<template>
  <nav :style="{ backgroundImage: `url(${Image})`, backgroundSize: 'cover' }">
    <router-link :style="{ textTransform: 'uppercase', fontSize: '1.5rem', background: 'transparent', color: '#FFFFFF' }"
      to="/">Vue Project - Biran Varon</router-link>
    <div :style="{ marginRight: '2rem' }">
      <router-link active-class="active" :style="{ border: '1px solid white', marginRight: '0.5rem' }"
        to="/todo-list">Todo
        List</router-link>
      <router-link active-class="active" :style="{ border: '1px solid white' }" to="/memory-game">Memory
        Game</router-link>
    </div>
  </nav>
  <router-view></router-view>
</template>

<script setup>
import Image from "./assets/preview1.png"
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Trebuchet MS", sans-serif;
}

body {
  background-color: #eee;
  text-align: center;
}

nav {
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
}

nav div {
  background-color: transparent;
}

nav a {
  text-decoration: none;
  color: #fff;
  padding: 0.75rem 1.5rem;
  background-color: transparent;
}

nav a.active {
  color: #000;
  background-color: #fff;
}

h1 {
  margin: 2rem 0;
}

button {
  appearance: none;
  border: 1px solid;
  cursor: pointer;
  font-weight: bold;
  padding: 0.4rem 0.6rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  opacity: 0.7;
  transition: 0.3s;
  background-color: #fff;
  margin: 0 0.2rem;
}

button:hover {
  opacity: 1;
}
</style>