<template>
	<label :for="label.toLowerCase()">
		<input :val="inputValue" v-on:input="inputValue" :id="label.toLowerCase()" type="text" />
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
					console.log("this:",this);
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