import type { LinearProgressProps } from "./types/linear-progress.types";

export function LinearProgress({ active }: LinearProgressProps) {
  if (!active) return null;

  return (
    <div className="relative h-[3px] overflow-hidden bg-border-soft">
      <div className="animate-ocean-loader absolute inset-y-0 left-0 w-[32%] bg-[linear-gradient(90deg,transparent_0%,var(--color-accent)_35%,var(--color-accent-light)_70%,transparent_100%)]" />
    </div>
  );
}
