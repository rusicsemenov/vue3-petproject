import { mount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';
import { createPinia } from 'pinia';
import { routes } from '@/router';
import type { Component } from 'vue';

export async function setupTestApp(Component: Component, route = '/') {
    const router = createRouter({
        history: createWebHistory(import.meta.env.BASE_URL),
        routes,
    });
    const pinia = createPinia();

    await router.push(route);
    await router.isReady();

    return mount(Component, {
        global: {
            plugins: [router, pinia],
        },
    });
}
