export const PRODUCT_VARIATIONS_TITLE = "Варіанти";

/** Variations may ship without a title or a name, so the position in the list becomes the label. */
export const PRODUCT_VARIATIONS_FALLBACK_LABEL = (index: number) => `Варіант ${index + 1}`;
