<script lang="ts" setup>
    import BasketController from '@/components/header/BasketController.vue';
    import { useRouter } from 'vue-router';
    import LanguageSelector from '@/components/LanguageSelector.vue';

    const router = useRouter();

    const isActive = (path: string) => {
        return router.currentRoute.value.path === path
            ? 'text-sm/6 font-semibold text-gray-900 text-indigo-600'
            : 'text-sm/6 font-semibold text-gray-500 hover:text-gray-900';
    };

    const menu: { name: string; href: string }[] = [
        { name: 'Home', href: '/' },
        { name: 'Films', href: '/films' },
        { name: 'Marketplace', href: '/marketplace' },
        { name: 'About', href: '/about' },
    ];
</script>

<template>
    <header class="absolute inset-x-0 top-0 z-50 px-2">
        <nav aria-label="Global" class="flex items-center justify-center gap-2 p-6 lg:px-8">
            <div class="flex lg:flex-1">
                <RouterLink class="-m-1.5 p-1.5" to="/">
                    <img
                        alt=""
                        class="h-8 w-auto"
                        src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                    />
                </RouterLink>
            </div>
            <div class="hidden lg:flex lg:gap-x-12">
                <RouterLink
                    v-for="element in menu"
                    :key="element.name"
                    :class="isActive(element.href)"
                    :to="element.href"
                >
                    {{ $t(element.name) }}
                </RouterLink>
            </div>

            <BasketController />
            <LanguageSelector />
        </nav>
    </header>
</template>
