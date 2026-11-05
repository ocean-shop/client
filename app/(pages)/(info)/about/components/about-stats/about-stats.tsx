import { SurfaceCard } from "@/app/ui/surface-card/surface-card";
import type { AboutStatsProps } from "./types/about-stats.types";

export const AboutStats = ({ stats }: AboutStatsProps) => {
  return (
    <dl className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:gap-4">
      {stats.map((stat) => (
        <SurfaceCard
          key={stat.label}
          padding="sm"
          className="flex flex-col-reverse justify-end gap-1"
        >
          <dt className="text-[13px] text-muted">{stat.label}</dt>
          <dd className="font-heading text-xl font-semibold text-accent lg:text-2xl">
            {stat.value}
          </dd>
        </SurfaceCard>
      ))}
    </dl>
  );
};
