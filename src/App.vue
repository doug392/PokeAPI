<template>
  <div id="app">
    <img id="main-img" alt="Pokemon logo" src="./assets/who's that pokemon.png">
    <HelloWorld msg="Enter A Pokemon Below!"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#main-img{
  width: 500px;
  height: 400px;
}
</style>
