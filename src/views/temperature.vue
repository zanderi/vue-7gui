<template>
	<div>
		<celsius></celsius>
    =
    <fahrenheit></fahrenheit>
	</div>
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
	
</style>