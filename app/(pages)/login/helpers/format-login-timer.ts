/** Formats the resend countdown as `m:ss`. */
export function formatLoginTimerHelper(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const rest = seconds % 60;

  return `${minutes}:${String(rest).padStart(2, "0")}`;
}
