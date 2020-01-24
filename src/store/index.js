import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		incrementCount: 0,
		fahrenheit: '',
		celsius: '',
		crud: {
			nameFirst: '',
			nameLast: '',
			filter: '',
			users: [],
			userExists: false,
			updateDeleteDisabled: true
		}
	},
	mutations: {
		incrementCounter: (state) => {
			state.incrementCount++
		},
		updateFahrenheit: (state, data) => {
			if (data.match(/^[\d]*[.]?[\d]*$/) && data !== '') {
				state.fahrenheit = (data.trim() * (9 / 5) + 32);
			}
		},
		updateCelsius: (state, data) => {
			if (data.match(/^[\d]*[.]?[\d]*$/)) {
				state.celsius = (data.trim() - 32) * (5 / 9);
			}
		},
		crudCreateUser: (state, data) => {
			state.crud.users.find(user => {
				if(user.first === data.first && user.last === data.last) {
					state.crud.userExists = true;
				}
			});
			if (!state.crud.userExists) {
					data.fullName = data.last + ', ' + data.first;
					data.selected = false;
					state.crud.users.push(data)
			}
			state.crud.nameFirst = '';
			state.crud.nameLast = '';
		},
		crudUpdateUserTable: (state, data) => {
			state.crud.users.find(user => {
				if(user.selected) {
					user.fullName = data.last + ', ' + data.first;
					user = Object.assign(data);
				}
			});
		},
		crudDeleteUser: (state) => {
			state.crud.users = state.crud.users.filter(user => {
				return !user.selected
			});
			state.crud.nameFirst = '';
			state.crud.nameLast = '';
			state.crud.updateDeleteDisabled = true;
		},
		crudToggleSelectedUser: (state, data) => {
			state.crud.users.forEach(user => (
				(user.fullName === data.fullName) ? user.selected = true : user.selected = false
			));
			state.crud.nameFirst = data.first;
			state.crud.nameLast = data.last;
			state.crud.updateDeleteDisabled = false;
		}
	},
	actions: {},
	getters: {
		crudUsers: (state) => {
			return state.crud.users
		},
		crudFilterUsers: (state) => {
			let filter = state.crud.filter.trim();

			if(filter !== '') {
				return state.crud.users.filter((user) => {
					if (user.fullName.includes(filter)) {
						return user;
					}
				})
			}
			else {
				return state.crud.users
			}
		},
		crudCreateDisabled: (state) => {
			return !(state.crud.nameLast.trim() !== '' && state.crud.nameFirst.trim() !== '')
		},
		crudUpdateDeleteDisabled: (state) => {
			return state.crud.updateDeleteDisabled
		}
	},
	modules: {}
})
