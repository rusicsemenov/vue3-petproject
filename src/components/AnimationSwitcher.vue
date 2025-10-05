<script lang="ts" setup>
import { useSettingsStore } from '@/stores/settings.ts';

const settings = useSettingsStore();
</script>

<template>
    <label
        class="fixed right-4 bottom-4 z-50 flex cursor-pointer items-center rounded-full bg-white/90 p-3 shadow-lg backdrop-blur transition select-none peer-checked:bg-indigo-600/90 peer-checked:text-white"
        for="animation-switcher"
    >
        <svg
            :fill="settings.animationEnabled ? 'pink' : 'none'"
            class="h-6 w-6"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
        <span class="ml-2 text-sm font-medium">Animation</span>
    </label>
    <input
        id="animation-switcher"
        :checked="settings.animationEnabled"
        class="peer hidden"
        type="checkbox"
        @change="settings.toggleAnimation()"
    />
</template>
