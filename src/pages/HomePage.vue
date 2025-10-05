<script lang="ts" setup>
    import MainLayout from '@/components/layouts/MainLayout.vue';
</script>

<template>
    <MainLayout>
        <div class="mx-auto max-w-2xl py-20">
            <div class="hidden sm:mb-8 sm:flex sm:justify-center">
                <div
                    class="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                >
                    {{ $t('Use our film and show search.') }}
                    <RouterLink class="font-semibold text-indigo-600" to="/films">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        {{ $t('Go to search') }}
                        <span aria-hidden="true">&rarr;</span>
                    </RouterLink>
                </div>
            </div>
            <div class="text-center">
                <h1
                    class="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl"
                >
                    {{ $t('Welcome to the demo site!') }}
                </h1>
                <p class="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                    {{
                        $t(
                            'This is a demo project to test a new functions in the vue3 with pinia and tailwindcss.',
                        )
                    }}
                </p>
                <div class="mt-10 flex items-center justify-center gap-x-6">
                    <RouterLink
                        class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        to="/films"
                    >
                        {{ $t('Get started') }}
                    </RouterLink>
                    <a class="text-sm/6 font-semibold text-gray-900" href="#">
                        {{ $t('Learn more') }}
                        <span aria-hidden="true">→</span>
                    </a>
                </div>
            </div>
        </div>
    </MainLayout>
</template>
