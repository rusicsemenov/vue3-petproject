<script lang="ts" setup>
    import ModalWindow from '@/components/ModalWindow.vue';
    import { useBasketStore } from '@/stores/basket.ts';

    const basketStore = useBasketStore();
</script>

<template>
    <ModalWindow
        v-if="basketStore.count > 0"
        :onClickOk="basketStore.clear"
        subtitle="Are you sure you want to clear the basket?"
        title="Clear Basket"
    >
        <template v-slot:icon>
            <div class="relative mx-2">
                <i class="pi pi-cart-plus"></i>
                <div class="count">{{ basketStore.count }}</div>
            </div>
        </template>
        <template v-slot:subtitle>
            <p class="mb-6 text-gray-600">
                There are
                <strong>{{ basketStore.count }}</strong>
                items in your cart for the amount of
                <strong>${{ basketStore.basketPrice }}.</strong>
            </p>
            <p>
                Hobby - {{ basketStore.basket.hobby }}
                <br />
                Enterprise - {{ basketStore.basket.enterprise }}
                <br />
            </p>

            <p class="my-3 text-red-500">Are you sure you want to clear the basket?</p>
        </template>
    </ModalWindow>
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
