<template>
  <div id="app">
    <increment></increment>
    <Celsius></Celsius>
    =
    <Fahrenheit></Fahrenheit>
  </div>
</template>

<script>
import Celsius from './components/celsius'
import Fahrenheit from './components/fahrenheit'
import Increment from "./components/increment";

export default {
  name: 'app',
  components: {
    Increment,
    Celsius,
    Fahrenheit
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
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
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
  .row{
    margin-bottom: 1rem;
  }
</style>
