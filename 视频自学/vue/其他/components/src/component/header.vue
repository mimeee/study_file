<template>
  <div>
   	<div class="header">
   		<div class="left">
				<div>
					brand logo
				</div>
				<div>
					brand font
				</div>  			
   		</div>
   		<div class="right">
				<div>
					login
				</div>
				<div>
					register
				</div> 			
   		</div>
   	</div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
.header{
	background: #fff url(4.jpg) no-repeat;
	height: 80px;
	line-height: 80px;
	font-size:24px;
	color:#333;
	border-bottom: 2px solid #eee;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content:space-between;

	div{
		display:flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content:start;
		&.left{
			div{
				margin-left:10px;
			}
		}
		&.right{			
			div{
				padding: 0 30px;
				position: relative;
				margin-right:20px;
				cursor: pointer;
				&:hover{
					color:#666;
					&::after{
						width: 70%;
					}
					&::before{
						width: 70%;
						left: 30%;
					}
				}	
				&::after,&::before{
						content:"";
						position: absolute;
						display: block;
						transition: all 0.5s ease;
						width: 0%;
						left: 0;
						bottom: 0;
						height: 2px;
						background: #ccc;
				}	
				&::before{
						left: 100%;
						top: 0;
				}			
			}
		}
	}
}




</style>
