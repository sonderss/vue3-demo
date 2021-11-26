import { createRouter, RouteRecordRaw, Router, createWebHistory } from 'vue-router'

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
        path: '/article',
        name: 'Main',
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
            cache: true
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
