
export interface StartBackgroundJobRequest {
    durationMs: number;
}

export interface EchoRequest {
    [key: string]: unknown;
}

export interface SearchQueryParams {
    q: string;
}

export interface FeedQueryParams {
    [key: string]: string | number | boolean | undefined;
    page: number;
    size: number;
    delay?: number;
}

export interface FlakyQueryParams {
    [key: string]: string | number | boolean | undefined;
    failRate?: number;
}

export interface SlowImageQueryParams {
    ms?: number;
}


