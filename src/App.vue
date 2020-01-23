<template>
  <div id="app">
    <navigation />
    <router-view />
  </div>
</template>

<script>
import navigation from './components/navigation'

export default {
  name: 'app',
  components: {
    navigation
  }
}
</script>

<style lang="scss">
  body{
    font-size: 16px;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;    
  }
  label{
    font-weight: bold;
  }
  input{
    display: inline-block;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    margin-right:.5rem;
  }  
</style>
