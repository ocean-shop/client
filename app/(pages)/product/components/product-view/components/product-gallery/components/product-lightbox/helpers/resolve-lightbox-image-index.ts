/** Wrapping around both ends keeps the arrows and the arrow keys useful on the first and last photo. */
export function resolveLightboxImageIndexHelper(
  activeIndex: number,
  step: number,
  imageCount: number
): number {
  return (activeIndex + step + imageCount) % imageCount;
}
