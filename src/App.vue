<template>
  <header class="header">
    <router-link class="logo" to="/">TodoList</router-link>
  </header>
  <router-view class="main"></router-view>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Trebuchet MS", sans-serif;
}

body {
  background-color: #eee;
  overflow-y: scroll;
}

.header {
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  background-image: url(./assets/background.png);
  padding: 0 7%;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
}

.logo {
  font-size: 2rem;
  color: black;
  text-shadow: 1px 1px 2px #66756b;
  font-weight: bold;
  text-decoration: none;
}

.main {
  margin: 0 auto;
  max-width: 600px;
  justify-content: center;
  text-align: center;
  padding: 1rem;
}

/* .logo {
  font-size: 2rem;
  color: white;
  text-shadow: 1px 1px 2px #000;
  font-weight: bold;
  text-decoration: none;
} */
</style>