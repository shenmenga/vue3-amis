import { createRouter, createWebHistory } from 'vue-router';
import layout from '@/components/layout/index.vue';
const _routes = [
    {
        path: '/',
        component: layout,
        redirect: '/index',
        children: [
            {
                path: 'index',
                name: 'index',
                component: () => import('@/view/index/index.vue'),
            }
        ],
    },
    {
        path: '/edit',
        name: 'edit',
        component: () => import('@/view/edit/index.vue'),
    }
];
const router = createRouter({
    history: createWebHistory('/'),
    routes: _routes,
});

export default router;
