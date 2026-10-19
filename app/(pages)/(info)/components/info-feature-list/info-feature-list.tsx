import type { InfoFeatureListProps } from "./types/info-feature-list.types";

/** Rows of an icon, a description and a value on the right, e.g. delivery methods and their prices. */
export function InfoFeatureList({ items }: InfoFeatureListProps) {
  return (
    <ul className="flex flex-col">
      {items.map((item) => (
        <li
          key={item.title}
          className="flex items-start gap-3.5 border-b border-surface py-3.5 last:border-b-0 lg:items-center"
        >
          <span
            aria-hidden
            className="flex h-10 w-10 flex-none items-center justify-center rounded-[11px] bg-accent-soft font-symbols text-[21px] text-accent"
          >
            {item.icon}
          </span>

          <div className="flex min-w-0 flex-1 flex-col gap-[3px]">
            <span className="text-[14.5px] font-semibold text-foreground">{item.title}</span>
            <span className="text-[13px] leading-[1.5] text-muted">{item.text}</span>
          </div>

          <div className="flex flex-none flex-col items-end gap-0.5">
            <span className="whitespace-nowrap text-[14.5px] font-semibold text-foreground">
              {item.value}
            </span>
            <span className="whitespace-nowrap text-[12.5px] text-muted-light">{item.caption}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}
