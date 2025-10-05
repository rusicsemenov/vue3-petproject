import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { TNotFoundShow, TvMazeSearchResult, TvMazeShow } from '@/types/film.types.ts';

import { useToast } from 'vue-toastification';

const toast = useToast();

const FIVE_MINUTES = 5 * 60 * 1000; // 5 minutes
const DELAY_CACHE = FIVE_MINUTES; // 1 minute

export const useFilmsStore = defineStore('films', () => {
    const films = ref<TvMazeSearchResult>([]);
    const lastUpdate = ref<number | null>(null);
    const isLoading = ref(false);
    const controller = new AbortController();
    const lastSearchTerm = ref<string>('');

    function onError(error: unknown) {
        if (error instanceof DOMException && error.name === 'AbortError') {
            toast.error('Fetch aborted');
            return;
        }
        const errMsg = error instanceof Error ? error.message : String(error);
        toast.error(`Error fetching films: ${errMsg}`);

        console.error('Error fetching films:', error);
        films.value = [];
    }

    async function fetchFilms(searchTerm: string = 'inception') {
        if (
            lastUpdate.value &&
            Date.now() - lastUpdate.value < DELAY_CACHE &&
            lastSearchTerm.value === searchTerm
        ) {
            console.log('Using cached films data.');
            return;
        }

        try {
            isLoading.value = true;
            const data = await fetch(`https://api.tvmaze.com/search/shows?q=${searchTerm}`, {
                signal: controller.signal,
            });
            const json: TvMazeSearchResult = await data.json();

            if (json) {
                films.value = json;
            }
        } catch (error: unknown) {
            onError(error);
        } finally {
            lastSearchTerm.value = searchTerm;
            isLoading.value = false;
        }

        lastUpdate.value = Date.now();
    }

    function getFilm(id: number) {
        return films.value.find((film) => film.show.id === id);
    }

    async function fetchFilm(id: number) {
        try {
            const data = await fetch(`https://api.tvmaze.com/shows/${id}`, {
                signal: controller.signal,
            });
            const result: TvMazeShow | TNotFoundShow = await data.json();

            if ('status' in result && result.status === 404) {
                toast.error(`Film not found: ${result.message}`);
                return;
            }

            if (result) {
                films.value = [{ score: 1, show: result }];
            }
        } catch (error: unknown) {
            onError(error);
        }
    }

    return { films, fetchFilms, isLoading, lastSearchTerm, lastUpdate, getFilm, fetchFilm };
});
