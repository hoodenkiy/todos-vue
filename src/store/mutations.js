import * as mutationTypes from './mutation-types'

export default {
	[mutationTypes.SET_TODOS](state, payload) {
		if (!payload) {
			return
		}
		state.todos = payload
	},

	[mutationTypes.ADD_TODO](state, payload) {
		if (!payload) {
			return
		}
		state.todos.unshift(payload)
	},

	[mutationTypes.UPDATE_TODO](state, payload) {
		if (!payload) {
			return
		}
		state.todos = payload
	},

	[mutationTypes.DELETE_TODO](state, payload) {
		if (!payload) {
			return
		}
		state.todos = payload
	}
}
