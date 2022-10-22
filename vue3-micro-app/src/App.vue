<template>
  <h1>vue3-micro-app 子应用</h1>
  <nav>
    <router-link to="/">Home</router-link>
    |
    <router-link to="/about">About</router-link>
  </nav>

  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <router-view />
  </div>
</template>

<style lang="scss">
#micro-vue-app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    margin: 0 10px;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
