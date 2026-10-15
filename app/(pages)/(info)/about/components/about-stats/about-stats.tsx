import type { AboutStatsProps } from "./types/about-stats.types";

export function AboutStats({ stats }: AboutStatsProps) {
  return (
    <dl className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:gap-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="flex flex-col-reverse justify-end gap-1 rounded-2xl bg-background p-4 lg:p-5"
        >
          <dt className="text-[13px] text-muted">{stat.label}</dt>
          <dd className="font-heading text-xl font-semibold text-accent lg:text-2xl">
            {stat.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
