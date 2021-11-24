import { createRouter, RouteRecordRaw, Router, createWebHistory } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: '',
        component: () => import('@/views/index/index.vue'),
        meta: {
            title: '首页'
        }
    }
]

const router: Router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
