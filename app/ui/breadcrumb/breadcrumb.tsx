import Link from "next/link";
import type { BreadcrumbProps } from "./types/breadcrumb.types";

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div className="flex items-center gap-[7px] text-[13px] text-muted-light">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div key={`${item.label}-${index}`} className="flex items-center gap-[7px]">
            {item.href && !isLast ? (
              <Link href={item.href} className="cursor-pointer hover:text-accent">
                {item.label}
              </Link>
            ) : (
              <span className="font-medium text-foreground">{item.label}</span>
            )}

            {!isLast && <span className="font-symbols text-[15px]">chevron_right</span>}
          </div>
        );
      })}
    </div>
  );
}
