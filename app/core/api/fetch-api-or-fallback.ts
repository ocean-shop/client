/**
 * `fetch` for reads a page can render without: a failed status, an unreachable API, a broken or
 * empty body all resolve to `fallback` instead of throwing.
 */
export const fetchApiOrFallback = async <T>(
  input: RequestInfo | URL,
  init: RequestInit,
  fallback: T
): Promise<T> => {
  try {
    const response = await fetch(input, init);

    if (!response.ok) return fallback;

    return ((await response.json()) as T | null) ?? fallback;
  } catch {
    return fallback;
  }
};
