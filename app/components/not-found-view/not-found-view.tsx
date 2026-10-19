import Link from "next/link";
import {
  NOT_FOUND_CODE,
  NOT_FOUND_LINK_HREF,
  NOT_FOUND_LINK_LABEL,
  NOT_FOUND_TEXT,
  NOT_FOUND_TITLE,
} from "./constants/not-found-view.constants";

export function NotFoundView() {
  return (
    <div className="flex flex-1 items-center justify-center bg-surface-soft px-4 py-14">
      <div className="flex max-w-[480px] flex-col items-center gap-3 rounded-2xl bg-background px-6 py-14 text-center">
        <span className="font-heading text-[54px] font-semibold leading-none tracking-[-.035em] text-accent">
          {NOT_FOUND_CODE}
        </span>
        <h1 className="font-heading text-xl font-semibold tracking-[-.025em] text-foreground">
          {NOT_FOUND_TITLE}
        </h1>
        <p className="text-pretty text-[14.5px] text-muted">{NOT_FOUND_TEXT}</p>
        <Link
          href={NOT_FOUND_LINK_HREF}
          className="mt-2 inline-flex h-[50px] items-center justify-center gap-2 rounded-[10px] bg-accent px-[26px] text-[15px] font-semibold text-white hover:bg-accent-dark"
        >
          {NOT_FOUND_LINK_LABEL}
          <span className="font-symbols text-[19px]">arrow_forward</span>
        </Link>
      </div>
    </div>
  );
}
