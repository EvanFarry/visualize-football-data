<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Form></Form>
  </div>
</template>

<script>
//import comonents here
import Form from './components/form.vue'

export default {
  name: 'app',
  components: {
    Form
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
</style>
