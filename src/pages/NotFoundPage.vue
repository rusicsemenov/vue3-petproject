<script lang="ts" setup>
    import { useRouter } from 'vue-router';
    import CleanLayout from '@/components/layouts/CleanLayout.vue';

    const router = useRouter();
</script>

<template>
    <CleanLayout>
        <h1 class="text-8xl font-bold text-indigo-600">404</h1>
        <p class="mt-4 text-lg">Page Not Found</p>
        <button
            class="my-3 inline-block cursor-pointer rounded-md bg-indigo-600 px-6 py-2 text-white uppercase hover:bg-indigo-400"
            type="button"
            @click="router.go(-1)"
        >
            Go back
        </button>
        <RouterLink
            class="mt-1 inline-block text-[0.75rem] text-indigo-600 uppercase hover:underline"
            to="/"
        >
            Go to homepage
        </RouterLink>
    </CleanLayout>
</template>

<style scoped>
    main:before {
        content: '404';
        position: absolute;
        font-size: calc(var(--index) * 25);
        opacity: 0.05;
        z-index: -1;
    }
</style>
