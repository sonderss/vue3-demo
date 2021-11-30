import { createRouter, RouteRecordRaw, Router, createWebHistory, createWebHashHistory } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: '欢迎页',
        component: () => import('@/views/index/index.vue'),
        meta: {
            title: '欢迎页',
            cache: false
        }
    },
    {
        path: '/MyBlob',
        name: 'MyBlob',
        component: () => import('@/views/main/index.vue'),
        meta: {
            title: '首页',
            cache: true
        }
    },
    {
        path: '/detail',
        name: 'Detail',
        component: () => import('@/views/detail/index.vue'),
        meta: {
            title: '文章详情',
            cache: false
        }
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('@/views/about/index.vue'),
        meta: {
            title: '我的主页',
            cache: false
        }
    },
    {
        path: '/404',
        name: '404',
        component: () => import('@/views/404/index.vue'),
        meta: {
            title: '404',
            cache: false
        }
    },
    {
        path: '/:pathMatch(.*)',
        redirect: '/404'
    }
]

const router: Router = createRouter({
    history: createWebHashHistory(), //createWebHistory()
    routes
})

router.beforeEach((to: any, from, next) => {
    document.title = to.meta.title;
    next()
})
export default router
