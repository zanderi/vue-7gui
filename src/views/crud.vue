<template>
	<div class="comp-crud">
		<div class="row">
			<div class="col-12">
				<label for="filter-users">Filter Prefix: <input id="filter-users" type="text" v-model="filter"/></label>
			</div>
		</div>
		<div class="row">
			<div class="col-6 users-list">
				<ul class="list-unstyled">
					<li class="list-item" v-for="(person, index) in users" :key="index">
						<button type="button" v-on:click="() => { selectedIndividual(person) }"
										:class="{'active' : person.selected}">{{person.fullName}}
						</button>
					</li>
				</ul>
			</div>
			<div class="col-6">
				<ul class="list-unstyled">
					<li class="list-item">
						<label for="first-name">
							Name: <input id="first-name" type="text" v-model="nameFirst">
						</label>
					</li>
					<li class="list-item">
						<label for="last-name">
							Surname: <input id="last-name" type="text" v-model="nameLast">
						</label>
					</li>
				</ul>
			</div>
		</div>
		<div class="row">
			<div class="col-12">
				<ul class="list-inline">
					<li class="list-item">
						<button type="button" class="btn btn-primary-outline" :disabled="createDisabled" @click="createUser">
							Create
						</button>
					</li>
					<li class="list-item">
						<button type="button" class="btn btn-primary-outline" :disabled="updateDeleteDisabled" @click="updateUser">
							Update
						</button>
					</li>
					<li class="list-item">
						<button type="button" class="btn btn-primary-outline" :disabled="updateDeleteDisabled" @click="deleteUser">
							Delete
						</button>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapGetters} from "vuex"

	export default {
		name: "crud",
		computed: {
			...mapGetters({
				createDisabled: 'crudCreateDisabled',
				users: 'crudFilterUsers',
				updateDeleteDisabled: 'crudUpdateDeleteDisabled'
			}),
			nameFirst: {
				get() {
					return this.$store.state.crud.nameFirst
				},
				set(data) {
					this.$store.state.crud.nameFirst = data
				}
			},
			nameLast: {
				get() {
					return this.$store.state.crud.nameLast
				},
				set(data) {
					this.$store.state.crud.nameLast = data
				}
			},
			filter: {
				get() {
					return this.$store.state.crud.filter;
				},
				set(data) {
					this.$store.state.crud.filter = data;
				}
			}
		},
		methods: {
			createUser() {
				this.$store.commit("crudCreateUser", {first: this.nameFirst, last: this.nameLast});
			},
			selectedIndividual(data) {
				this.$store.commit("crudToggleSelectedUser", data);
			},
			updateUser() {
				this.$store.commit("crudUpdateUserTable", {first: this.nameFirst, last: this.nameLast})
			},
			deleteUser() {
				this.$store.commit("crudDeleteUser")
			}
		}
	}
</script>

<style scoped lang="scss">
	.comp-crud {
		margin: 15px;
	}

	.users-list {
		padding: 0;
		border: 1px solid $border-color;
		border-radius: $border-radius;
		min-height: 150px;
		overflow-y: auto;
		overflow-x: hidden;

		.list-item {
			padding: 0;
		}

		button {
			padding: 0 5px;
			border: none;
			width: 100%;
			text-align: left;
			display: block;
			line-height: 1.25em;
			font-size: 1rem;
			outline: none;

			&.active {
				background: rgb(182, 219, 250);
				color: #444;
			}

			&:hover, &:focus {
				background: rgb(102, 189, 250);
				color: #FFFFFF;
			}
		}
	}

	.btn {
		width: 100%;
	}
</style>