<script lang="ts" setup>
    const props = defineProps({
        class: {
            type: String,
            default: '',
        },
    });
</script>

<template>
    <main
        :class="`relative isolate flex flex-1 flex-col items-center justify-center px-6 pt-14 lg:px-8 ${props.class}`"
    >
        <slot />
    </main>
</template>
