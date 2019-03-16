import Vue from 'vue'
import VueRouter from 'vue-router'
import Cart from '../components/Cart'
import Books from '../pages/Books'
import Search from '../pages/Search'
import Log from "../pages/Log";
import Users from "../pages/Users";
import Orders from "../pages/Orders";
import Home from  "../pages/Home";

Vue.use(VueRouter);

export default new VueRouter ({
    // 注册应用中所有的路由
    routes: [
        {
            path:'/Books',
            component: Books
        },
        {
            path:'/Cart',
            component: Cart
        },
        {
            path:'/Search',
            component: Search
        },
        {
            path:'/Log',
            component:Log
        },
        {
            path:'/Orders',
            component:Orders
        },
        {
            path: '/users',
            component: Users
        },
        {
            path:'/Home',
            component:Home
        },
        {
            path:'/',
            redirect:'/Home'
        }


    ]
})
