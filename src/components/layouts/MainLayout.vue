<script lang="ts" setup>
    import BaseHeader from '@/components/header/BaseHeader.vue';
</script>

<template>
    <BaseHeader />
    <main class="relative isolate flex-1 px-6 py-14 lg:px-8">
        <slot />
    </main>
</template>
