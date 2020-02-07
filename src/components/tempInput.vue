<template>
	<label :for="label.toLowerCase()">
		<input v-model.trim="inputValue" :id="label.toLowerCase()" type="text" />
		{{ label }}
	</label>
</template>

<script>
	export default {
		props: [
			'label',
			'value'
		],
		name: "tempInput",
		computed: {
			inputValue: {
				get() {
					return this.value
				},
				set(value) {
					this.$emit('input', value)
				}
			}
		}
	}
</script>

<style scoped>

</style>