<template>
    <div class="comp-increment row">
        <input type="text" id="increment" v-model="incrementCounter">
        <button @click="increment" class="btn-primary-outline">Increment</button>
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
    .comp-increment{
        justify-content: center;
    }
</style>