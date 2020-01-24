<template>
	<nav>
		<ul class="list-inline">
			<li class="list-item">
				<router-link to="increment">Increment</router-link>
			</li>
			<li class="list-item">
				<router-link to="temperature">Temperature</router-link>
			</li>
			<li class="list-item">
				<router-link to="crud">CRUD</router-link>
			</li>
			<li class="list-item">
				<router-link disabled tabindex="-1" to="">Flight Booker</router-link>
			</li>
			<li class="list-item">
				<router-link disabled tabindex="-1" to="">Timer</router-link>
			</li>
			<li class="list-item">
				<router-link disabled tabindex="-1" to="">Circle Drawer</router-link>
			</li>
			<li class="list-item">
				<router-link disabled tabindex="-1" to="">Cells</router-link>
			</li>
		</ul>
	</nav>
</template>

<script type="text/javascript">
	
</script>

<style lang="scss" scoped>
	nav{
		border-bottom: 1px solid #cdcdcd;
		margin-bottom: 30px;		
		a{
			display: block;
			padding:.5rem;
			color:#999999;
			text-decoration: none;
			font-weight: bold;
			&[disabled], &[disabled]:hover, &[disabled]:focus{
				cursor:default;
				color:#dfdfdf;
				outline:none;
			}
			&:hover{
				color:darken(#999999,25%);
			}
		}
	}
</style>