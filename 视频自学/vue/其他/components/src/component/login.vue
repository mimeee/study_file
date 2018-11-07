<template>
  <div class="login">
  	<div>
  		<img src="./4.jpg" alt="">
  	</div>
   	<form>
   		<div>
   			<div>
	   			<label for="username"> username </label>
   			</div>
				<div>
					<input type="text" name="user">
				</div>
   		</div>
   		<div>
   			<div>
	   			<label for="username"> password </label>
   			</div>
				<div>
					<input type="text" name="pwd">
				</div>
   		</div>
   		<div>
   			<div>
	   			<label for="username"> code </label>
   			</div>
				<div>
					<input type="text" name="code">
				</div>
			</div>
			<div>
				<div>
					<input type="button" value="login">
				</div>
				<div>
					<a href="#">forget password</a>
				</div>
			</div>
   	</form>  	
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="less" style="stylesheet/less" scoped>
	.login{
		display: flex;
		position: absolute;
		top: 100px;
		left: 300px;
		border: 1px solid #000;
		width: 600px;
		height: 350px;
		div{
			width: 200px;
			overflow: hidden;
		}

	}

</style>
