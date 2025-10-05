<script lang="ts" setup>
    import MainLayout from '@/components/layouts/MainLayout.vue';
    import { useCounterStore } from '@/stores/counter.ts';

    const counterStore = useCounterStore();
</script>

<template>
    <MainLayout>
        <h1 class="text-3xl font-bold tracking-tight text-gray-900">Marketplace Page</h1>

        <button
            class="mx-3 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm text-white"
            @click="counterStore.increment()"
        >
            Add item
        </button>
        <button
            :disabled="counterStore.count <= 0"
            class="mx-3 rounded-md bg-pink-400 px-3.5 py-2.5 text-sm text-white disabled:bg-gray-200 disabled:text-gray-400"
            @click="counterStore.decrement()"
        >
            Remove item
        </button>
    </MainLayout>
</template>
