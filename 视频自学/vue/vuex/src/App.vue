<template>
  <div id="app">
  	<app-result></app-result>
  	<hr>	
  	<app-counter></app-counter>
  	{{ datas }}
  	{{ doubleCounter }}
  </div>
</template>

<script>
import appCounter from "./components/counter.vue"
import appResult from "./components/result.vue"
import { mapGetters } from 'vuex';
export default {
	components:{
		appCounter,
		appResult
	},
	data(){
		return {
			
		}
	},
	computed:{
		datas(){
			console.log( mapGetters(['doubleCounter','haha']) );
			//Object { doubleCounter: mappedGetter(), haha: mappedGetter() }
			return this.$store.getters.doubleCounter;
		},
		...mapGetters(['doubleCounter','haha'])
	}
}
</script>

<style>


</style>
