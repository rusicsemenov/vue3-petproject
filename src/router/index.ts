import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: () => import('../pages/HomePage.vue'),
    },
    {
        path: '/marketplace',
        name: 'marketplace',
        component: () => import('../pages/MarketplacePage.vue'),
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../pages/AboutPage.vue'),
    },
    {
        path: '/films',
        name: 'films',
        component: () => import('../pages/FilmsPage.vue'),
    },
    {
        path: '/film/:id',
        name: 'film',
        component: () => import('../pages/FilmPage.vue'),
    },
    {
        path: '/:catchAll(.*)*',
        name: 'not-found',
        component: () => import('../pages/NotFoundPage.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
