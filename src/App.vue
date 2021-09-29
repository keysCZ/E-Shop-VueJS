<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>



<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Nunito:200,200italic,300,300italic,regular,italic);
#app {
  font-family: "Nunito", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
  // background:linear-gradient(90deg, #a1c4fd 0%,#c2e9fb 100% );
}

body::-webkit-scrollbar {
  width: 15px; /* width of the entire scrollbar */
}

// body::-webkit-scrollbar-track {
//   border: 3px solid rgb(207, 171, 51);
// }

body::-webkit-scrollbar-thumb {
  background-color: black; /* color of the scroll thumb */
  border-radius: 20px; /* roundness of the scroll thumb */
  border-right: 2px solid rgb(207, 171, 51); /* creates padding around scroll thumb */
  border-left: 2px solid white; /* creates padding around scroll thumb */
}
</style>
