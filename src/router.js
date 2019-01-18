import Vue from 'vue'
import Router from 'vue-router'
import Post from './components/HelloWorld'
import Hello from './components/About'
import Forms from './components/HelloWorld'

Vue.use(Router)

const router = new Router(
    {
        routes: [
            {
                path: '/',
                name: 'home',
                component: Hello,
                beforeEnter: (to, from, next) => {
                    console.log('路由-前置-钩子')
                    next()
                }
                }, {
                path: '/posts/:title',
                name: 'post',
                component: Forms
            },
        ]
    }
    )

export default router