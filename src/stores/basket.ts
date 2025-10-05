import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import type { TBasketType } from '@/types/basket.types.ts';
import { tiersPrice } from '@/constants/tiers.constants.ts';

const defaultBasket = {
    hobby: 0,
    enterprise: 0,
};

export const useBasketStore = defineStore('basket', () => {
    const basket = ref({ ...defaultBasket });

    function addToBasket(type: TBasketType) {
        basket.value[type]++;
    }

    function removeFromBasket(type: TBasketType) {
        if (basket.value[type] > 0) {
            basket.value[type]--;
        }
    }

    function clear() {
        basket.value = { ...defaultBasket };
    }

    const count = computed(() => basket.value.hobby + basket.value.enterprise);

    const basketPrice = computed(
        () =>
            basket.value.hobby * tiersPrice.hobby + basket.value.enterprise * tiersPrice.enterprise,
    );

    return { basket, addToBasket, removeFromBasket, clear, count, basketPrice };
});
