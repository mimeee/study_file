<template>
  <div id="app">
  	<app-result></app-result>
  	<hr>	
  	<app-counter></app-counter>
  	
  </div>
</template>

<script>
import appCounter from "./components/counter.vue"
import appResult from "./components/result.vue"

export default {
	components:{
		appCounter,
		appResult
	},
	data(){
		return {
		}
	}
}
</script>

<style>


</style>
