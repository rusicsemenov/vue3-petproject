<script lang="ts" setup>
    import { useCounterStore } from '@/stores/counter.ts';

    const counterStore = useCounterStore();
</script>

<template>
    <div v-if="counterStore.count > 0" class="relative mx-2">
        <i class="pi pi-cart-plus"></i>
        <div class="count">{{ counterStore.count }}</div>
    </div>
</template>

<style scoped>
    .count {
        position: absolute;
        top: -8px;
        right: -8px;
        background-color: red;
        color: white;
        border-radius: 50%;
        width: 16px;
        height: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 10px;
    }
</style>
