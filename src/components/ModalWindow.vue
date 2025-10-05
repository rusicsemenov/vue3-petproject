<script lang="ts" setup>
    import { ref } from 'vue';

    const isOpen = ref(false);

    defineProps({
        title: {
            type: String,
            default: 'Modal Title',
        },
        onClickOk: {
            type: Function,
            default: () => {},
        },
    });
</script>

<template>
    <div>
        <span @click="isOpen = true">
            <slot name="icon" />
        </span>

        <!-- Overlay -->
        <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <!-- Modal -->
            <div class="relative w-96 rounded-2xl bg-white p-6 shadow-lg">
                <h2 class="mb-4 text-lg font-semibold">{{ title }}</h2>
                <slot name="subtitle" />
                <div class="flex justify-end gap-2">
                    <button
                        class="rounded bg-gray-200 px-4 py-2 hover:bg-gray-300"
                        @click="isOpen = false"
                    >
                        Close
                    </button>
                    <button
                        class="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                        @click="
                            onClickOk();
                            isOpen = false;
                        "
                    >
                        Ok
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
