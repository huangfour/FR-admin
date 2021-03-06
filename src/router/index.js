import Vue from 'vue'
import VueRouter from 'vue-router'
import Man from '../components/Man.vue'
import Map from '../views/Map.vue'
import Console from "../views/Console";
import Login from "@/views/Login"
import Home from "@/views/Home"
import FormView from "../views/FormView"
import FileList from "../views/FileList";
import UserList from "../views/UserList";
Vue.use(VueRouter)

const routes = [
    // 默认显示路径
    // 一级路由
    {
        path: '/',
        name: 'man',
        components: {
            //设置主页面的路由出口名字为index
            index: Man,
        },
        children: [{
            path: 'console',
            component: Console
        },{
            path:'map',
            component:Map
        },{
            path:'home',
            component:Home
        },{
            path:'formView',
            component:FormView
        },{
            path:'fileList',
            component:FileList
        },{
            path:'userList',
            component:UserList
        }]
    },
    // 一级路由
    {
        path: '/login',
        name: 'Login',
        components:{
            index:Login
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router




// {
//     path: '/about',
//         name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/Console.vue')
// },