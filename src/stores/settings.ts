import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useSettingsStore = defineStore('settings', () => {
    const animationEnabled = ref<boolean>(true);

    function toggleAnimation() {
        animationEnabled.value = !animationEnabled.value;
    }

    return { animationEnabled, toggleAnimation };
});
