/** One entry of a page's `searchParams`: absent, given once, or repeated. */
export type SearchParamValue = string | string[] | undefined;

export type SearchParamsRecord = Record<string, SearchParamValue>;
