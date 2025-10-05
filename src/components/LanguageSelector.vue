<script lang="ts" setup>
    import { availableLocales } from '@/pluguns/i18n';
</script>

<template>
    <select
        v-model="$i18n.locale"
        aria-label="Locales"
        class="col-start-1 row-start-1 appearance-none rounded-md border-1 px-3 py-1.5 text-base font-bold text-gray-500 uppercase placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
    >
        <option v-for="locale in availableLocales" :key="locale" :value="locale">
            {{ locale }}
        </option>
    </select>
</template>
