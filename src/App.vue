<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>



<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Nunito:200,200italic,300,300italic,regular,italic);
#app {
  font-family: 'Nunito', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
}


#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
