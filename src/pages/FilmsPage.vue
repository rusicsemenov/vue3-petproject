<script lang="ts" setup>
    import MainLayout from '@/components/layouts/MainLayout.vue';
    import { useFilmsStore } from '@/stores/films.ts';
    import { onMounted, watch } from 'vue';
    import { useRoute, useRouter } from 'vue-router';

    const getSearchQuery = (): string | undefined | null => {
        return Array.isArray(route.query.search) ? route.query.search[0] : route.query.search;
    };

    const router = useRouter();
    const route = useRoute();

    const filmsStore = useFilmsStore();

    watch(
        () => filmsStore.lastSearchTerm,
        () => {
            router.push({ query: { search: filmsStore.lastSearchTerm } });
        },
    );

    watch(
        () => route.query.search,
        () => {
            const searchQuery = getSearchQuery();
            if (searchQuery) {
                filmsStore.fetchFilms(searchQuery);
            }
        },
    );

    onMounted(() => {
        filmsStore.fetchFilms(getSearchQuery() || 'Inception');
    });
</script>

<template>
    <MainLayout>
        <div class="my-3 flex flex-wrap items-center justify-between">
            <h1 class="my-5 text-3xl">Films page</h1>
            <input
                :value="route.query.search"
                class="rounded-md border border-gray-300 px-3 py-2"
                placeholder="Search..."
                type="text"
                @keyup.enter="
                    (e) => {
                        const target = e.target as HTMLInputElement;
                        router.push({ query: { ...$route.query, search: target.value } });
                    }
                "
            />
        </div>

        <div class="text-center">
            <p v-if="!filmsStore.isLoading && filmsStore.films.length === 0" class="text-gray-500">
                No films found.
            </p>
        </div>

        <div v-if="filmsStore.isLoading">Loading...</div>

        <div
            v-else
            class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
        >
            <RouterLink
                v-for="film in filmsStore.films"
                :key="film.show.id"
                :to="`/film/${film.show.id}`"
                class="group"
            >
                <img
                    :alt="film.show.name"
                    :src="film.show.image?.original || 'https://placehold.co/210x295?text=No+Image'"
                    class="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
                />
                <h3 class="text-md mt-4 font-bold text-gray-700">{{ film.show.name }}</h3>
                <p class="mt-1 text-xs font-light text-gray-500">Score: {{ film.score }}</p>
                <p
                    class="mt-1 line-clamp-3 overflow-hidden text-sm font-light text-ellipsis text-gray-500"
                    v-html="film.show.summary"
                />
            </RouterLink>
        </div>
    </MainLayout>
</template>
