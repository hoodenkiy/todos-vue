<template>
	<header>
		<div class="d-flex align-items-center">
			<h1 class="text-muted mb-0 mr-3 font-weight-light">
				to<span class="text-primary">do</span>'s
			</h1>
		</div>

		<div class="nav-container">
		<div class="slanted-top bg-primary"></div>
		<nav
			class="navbar shadow navbar-expand-lg navbar-dark bg-primary py-3 pr-3 align-items-center"
		>
			<span class="navbar-brand">+ Add todo: </span>
			<div class="flex-grow-1">
				<input
					class="form-control w-100 rounded-0 text-primary"
					@keyup.enter="addTodo"
					placeholder="Enter title ..."
					ref="titleInput"
					v-model="todo.title"
					type="text"
				/>
			</div>
			<div class="btn-group-sm">
				<button
					@click="addTodo"
					class="btn btn-light text-primary ml-2 rounded-0"
					type="submit"
				>
					Add
				</button>
			</div>
		</nav>
	</div>
	</header>
</template>

<script>
import { mapActions } from 'vuex';

export default {
	data() {
		return {
			todo: {
				completed: false,
				title: ''
			}
		}
	},
	methods: {
		...mapActions(['createTodo']),
		addTodo
	},
	mounted() {
		this.$refs.titleInput.focus()
	}
}

/**
 * Adds a new todo
 */
function addTodo() {
	if (this.todo.title === '') {
		return
	}

	const newTodo = { ...this.todo }
	newTodo.title = newTodo.title.replace(/[^a-zA-Z0-9 ]/g, '')

	this.createTodo(newTodo).then(() => {
		this.todo.title = ''
	})
}
</script>

<style lang="scss" scoped>
.slanted-top {
	height: 25px;
	-webkit-clip-path: polygon(0% 96%, 100% 0%, 100% 100%, 0% 100%);
	clip-path: polygon(0% 96%, 100% 0%, 100% 100%, 0% 100%);
}
</style>
