<template>
    <label for="celsius">
        <input v-model="celsius" id="celsius" type="text" />
        Celsius
    </label>
</template>

<script>
    export default {
        name: "celsius",
        computed: {
            celsius: {
                get () {
                    return this.$store.state.celsius
                },
                set (data) {
                    this.$store.commit("updateFahrenheit", data)
                }
            }
        }
    }
</script>

<style scoped>

</style>