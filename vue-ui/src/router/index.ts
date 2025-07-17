import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('@/views/index.vue'),
    },
    {
        path: '/friends',
        component: () => import('@/views/friends.vue'),
    },
    {
        path: '/about',
        component: () => import('@/views/about.vue'),
    },
    {
        path: '/archives',
        component: () => import('@/views/archives.vue'),
    },
]

export default createRouter({
    routes,
    history: createWebHistory(),
})
