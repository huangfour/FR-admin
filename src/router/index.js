import Vue from 'vue'
import VueRouter from 'vue-router'
import Man from '../components/Man.vue'
import Map from '../views/Map.vue'
import About from "@/views/About"
import Login from "@/views/Login";
import HelloWorld from "@/views/HelloWorld";


Vue.use(VueRouter)

const routes = [
    // 默认显示路径
    {
        path: '/',
        name: 'Home',
        components: {
            //主页面的路由出口名字为index
            index: Man,
        },
        children: [{
            path: 'about',
            component: About
        },{
            path:'map',
            component:Map
        },{
            path:'helloworld',
            component:HelloWorld
        }]
    },
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
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
// },