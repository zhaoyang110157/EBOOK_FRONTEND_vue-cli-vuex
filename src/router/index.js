import Vue from 'vue'
import VueRouter from 'vue-router'
import Cart from '../components/Cart'
import Books from  '../components/Books'
import Search from '../components/Search'

Vue.use(VueRouter)

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
        }
    ]
})
