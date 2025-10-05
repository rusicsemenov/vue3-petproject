<script lang="ts" setup>
import MainLayout from '@/components/layouts/MainLayout.vue';
import { useFilmsStore } from '@/stores/films.ts';
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();
    const filmsStore = useFilmsStore();
    const filmId = Number(route.params.id);

    const film = computed(() => filmsStore.getFilm(filmId));

    if (!film.value) {
        filmsStore.fetchFilm(filmId);
    }
</script>

<template>
    <MainLayout>
        <div
            v-if="film"
            class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0"
        >
            <div class="absolute inset-0 -z-10 overflow-hidden">
                <svg
                    aria-hidden="true"
                    class="absolute top-0 left-[max(50%,25rem)] h-256 w-512 -translate-x-1/2 mask-[radial-gradient(64rem_64rem_at_top,white,transparent)] stroke-gray-200"
                >
                    <defs>
                        <pattern
                            id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                            height="200"
                            patternUnits="userSpaceOnUse"
                            width="200"
                            x="50%"
                            y="-1"
                        >
                            <path d="M100 200V.5M.5 .5H200" fill="none" />
                        </pattern>
                    </defs>
                    <svg class="overflow-visible fill-gray-50" x="50%" y="-1">
                        <path
                            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                            stroke-width="0"
                        />
                    </svg>
                    <rect
                        fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
                        height="100%"
                        stroke-width="0"
                        width="100%"
                    />
                </svg>
            </div>
            <div
                class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10"
            >
                <div
                    class="sticky top-0 lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
                >
                    <div class="lg:pr-4">
                        <div class="lg:max-w-lg">
                            <p class="text-base/7 font-semibold text-indigo-600">
                                {{ film.show.premiered }}
                            </p>
                            <h1
                                class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl"
                            >
                                {{ film.show.name }}
                            </h1>
                            <p class="mt-6 text-xl/8 text-gray-700" v-html="film.show.summary" />
                        </div>
                        <div class="text-md mt-6">
                            <i class="pi pi-link" />
                            <a
                                :href="film.show.officialSite || film.show.url"
                                class="text-indigo-600 hover:text-indigo-500"
                                target="_blank"
                            >
                                Official site
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    class="-mt-12 -ml-12 flex justify-center p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden"
                >
                    <img
                        :alt="film.show.name"
                        :src="
                            film.show.image?.original ||
                            'https://placehold.co/210x295?text=No+Image'
                        "
                        class="w-3xl max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-228"
                    />
                </div>
            </div>
        </div>
    </MainLayout>
</template>
