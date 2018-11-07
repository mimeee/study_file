<template>
  <div id="app">
     <app-header></app-header> 
     <app-login></app-login>
  </div>
</template>

<script>
import appHeader from './component/header.vue';
import appLogin from "./component/login.vue";
export default {
	components:{
		appHeader,
		appLogin
	}  
}
</script>

<style lang="less" rel="stylesheet/less">
body{
	padding: 0;
	margin: 0;
}
</style>
