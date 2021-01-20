<template>
  <div id="app">
    <Header HeaderSection="Header Section By Props"/>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to My Vue.js Project"/>
    <Footer/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/layouts/Header.vue'
import Footer from './components/layouts/Footer.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Header,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
