<template>
    <div class="row">
        <input type="text" id="increment" v-model="incrementCounter">
        <button @click="increment">Increment</button>
    </div>
</template>

<script>
    export default {
        name: "increment",
        computed: {
          incrementCounter () {
              return this.$store.state.incrementCount;
          }
        },
        methods: {
            increment() {
                this.$store.commit("incrementCounter")
            }
        }
    }
</script>

<style scoped lang="scss">
 button {
     cursor: pointer;
     -webkit-appearance: button;
     display: inline-block;
     font-weight: 400;
     text-align: center;
     white-space: nowrap;
     vertical-align: middle;
     -webkit-user-select: none;
     -moz-user-select: none;
     -ms-user-select: none;
     user-select: none;
     border: 1px solid transparent;
     padding: .375rem .75rem;
     font-size: 1rem;
     line-height: 1.5;
     border-radius: .25rem;
     transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
     color: #6c757d;
     background-color: transparent;
     background-image: none;
     border-color: #6c757d;
     &:hover{
          color: #fff;
          background-color: #6c757d;
          border-color: #6c757d;
      }
 }
</style>