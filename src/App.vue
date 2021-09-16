<template>
	<div id="app">
		<div class="container my-5">
			<Header />
			<router-view />
		</div>
	</div>
</template>

<script>
import { mapActions } from 'vuex'
import Header from '@/components/Header'

export default {
	components: {
		Header
	},
	created() {
		this.getTodos({})
	},
	methods: {
		...mapActions(['getTodos'])
	}
}
</script>
