import Vue from 'vue'
import Router from 'vue-router'
import Post from './components/HelloWorld'
import About from './components/About'

Vue.use(Router)

const router = new Router(
    {
        routes: [
            {
                path: '/',
                name: 'home',
                component: About
                }, {
                path: '/posts/:title',
                name: 'post',
                component: Post,
            },
        ]
    }
    )

export default router