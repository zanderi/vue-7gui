<template>
	<label for="fahrenheit">
		<input v-model="fahrenheit" id="fahrenheit" type="text"/>
		Fahrenheit
	</label>
</template>

<script>
	export default {
		name: "fahrenheit",
		computed: {
			fahrenheit: {
				get() {
					return this.$store.state.fahrenheit
				},
				set(data) {
					this.$store.commit("updateCelsius", data)
				}
			}
		}
	}
</script>

<style scoped>

</style>