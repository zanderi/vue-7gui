<template>
	<section class="comp-temp">
		<celsius></celsius>
    =
    <fahrenheit></fahrenheit>
	</section>
</template>

<script type="text/javascript">
import fahrenheit from '@/components/fahrenheit'
import celsius from '@/components/celsius'

export default {
	name: 'temperature',
	components: {
		fahrenheit,
		celsius
	}
}
	
</script>

<style scoped lang="scss">
	.comp-temp{
		margin:15px;
	}
</style>