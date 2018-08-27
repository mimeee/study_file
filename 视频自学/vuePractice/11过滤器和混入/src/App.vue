<template>
  <div id="app">
  	<div class="container">
  		{{ vocabulary }}
  		<hr>
  		{{ vocabulary | reserve }}
  		<hr>
  		{{ vocabulary | calc }}
	</div>
  </div>
</template>

<script>
import Vue from 'vue';
Vue.filter('calc',function(value) {
	return value + "(" + value.length + ")";
})
export default {
	filters:{
		reserve(value){
			
			return value.split("").reverse().join("");
		}
	},
	data(){
		return {
			vocabulary:'vocabulary'
		}
	}
}
</script>

<style scoped="">
div{
	margin-top: 20px;
}
</style>
