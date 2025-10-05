export type TNotFoundShow = {
    name: string;
    message: string;
    status: 404;
    code: 0;
};

export type TvMazeSearchResult = {
    score: number;
    show: TvMazeShow;
}[];

export interface TvMazeShow {
    id: number;
    url: string;
    name: string;
    type: string;
    language: string;
    genres: string[];
    status: string;
    runtime: number | null;
    averageRuntime: number | null;
    premiered: string | null;
    ended: string | null;
    officialSite: string | null;
    schedule: {
        time: string;
        days: string[];
    };
    rating: {
        average: number | null;
    };
    weight: number;
    network: TvMazeNetwork | null;
    webChannel: TvMazeWebChannel | null;
    dvdCountry: string | null;
    externals: {
        tvrage: number | null;
        thetvdb: number | null;
        imdb: string | null;
    };
    image: {
        medium: string;
        original: string;
    } | null;
    summary: string | null;
    updated: number;
    _links: {
        self: {
            href: string;
        };
        previousepisode?: {
            href: string;
            name?: string;
        };
    };
}

export interface TvMazeNetwork {
    id: number;
    name: string;
    country: {
        name: string;
        code: string;
        timezone: string;
    };
    officialSite: string | null;
}

export interface TvMazeWebChannel {
    id: number;
    name: string;
    country: {
        name: string;
        code: string;
        timezone: string;
    } | null;
    officialSite: string | null;
}
