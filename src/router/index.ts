import { createRouter, RouteRecordRaw, Router, createWebHistory } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: '欢迎页',
        component: () => import('@/views/index/index.vue'),
        meta: {
            title: '欢迎页'
        }
    },
    {
        path: '/article',
        name: '首页',
        component: () => import('@/views/main/index.vue'),
        meta: {
            title: '首页'
        }
    }
]

const router: Router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to: any, from, next) => {
    document.title = to.meta.title;
    next()
})
export default router
