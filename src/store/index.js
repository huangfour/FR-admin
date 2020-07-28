import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isLogin:false,

    },
    getters:{
        isLogin:state => state.isLogin,
    },
    mutations: {
        doLogin(state){
            console.log(state.isLogin)
            state.isLogin=true
            console.log(state.isLogin)
        }
    },
    actions: {
        loginSuccess(context){
            context.commit('doLogin')
        }
    },
    modules: {}
})
