import Vue from 'vue';
import VueX from 'vuex';
Vue.use(VueX);


export const store = new VueX.Store(
	{
		state:{
			counter: 0
		},
		getters:{
			haha(){
				alert(counter);
			},
			doubleCounter(state, getters){
				console.log(getters);
				return state.counter * 2
			}  
		}
	}
)