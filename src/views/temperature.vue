<template>
	<section class="row comp-temp">
		<temp-input label="Celsius" v-model="celsius" />
    &nbsp;=&nbsp;
		<temp-input label="Fahrenheit" v-model="fahrenheit" />
	</section>
</template>

<script type="text/javascript">
import TempInput from "../components/tempInput";

export default {
	name: 'temperature',
	components: {
		TempInput
	},
	computed: {
		fahrenheit: {
			get() {
				return this.$store.state.fahrenheit
			},
			set(data) {
				this.$store.commit("updateCelsius", data)
			}
		},
		celsius: {
			get() {
				return this.$store.state.celsius
			},
			set(data) {
				this.$store.commit("updateFahrenheit", data)
			}
		}
	}
}
	
</script>

<style scoped lang="scss">
	.comp-temp{
		margin:15px;
		justify-content: center;
		align-items: center;
	}
</style>