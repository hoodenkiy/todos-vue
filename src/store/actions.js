import axios from 'axios'
import * as mutationTypes from './mutation-types'
import { v4 as uuidv4 } from 'uuid'

const DB_URL = 'https://json-data-server.herokuapp.com'

export const getTodos = ({ commit }) => {
	const params = '?_sort=created&_order=desc'
	return axios
		.get(`${DB_URL}/todos${params}`)
		.then(response => {
			commit(mutationTypes.SET_TODOS, response.data)
		})
		.catch(error => {
			handleErrors(error)
		})
}

export const createTodo = ({ commit, dispatch }, todo) => {
	if (!todo) {
		return
	}

	const newTodo = {
		id: uuidv4(),
		created: new Date(),
		...todo
	}

	return axios
		.post(`${DB_URL}/todos`, newTodo)
		.then(response => {
			commit(mutationTypes.ADD_TODO, response.data)
			dispatch('getTodos')
		})
		.catch(error => {
			handleErrors(error)
		})
}

export const deleteTodo = ({ dispatch }, { id }) => {
	if (!id) {
		return
	}

	return axios
		.delete(`${DB_URL}/todos/${id}/`)
		.then(result => {
			dispatch('getTodos')
		})
		.catch(error => {
			handleErrors(error)
		})
}

export const updateTodo = ({ dispatch }, todo) => {
	if (!todo) {
		return
	}

	return axios
		.put(`${DB_URL}/todos/${todo.id}/`, todo)
		.then(result => {
			dispatch('getTodos')
		})
		.catch(error => {
			handleErrors(error)
		})
}

/**
 * Handles errors for api calls
 * @param {Error} error
 */
function handleErrors(error) {
	console.log('error', error)
}
