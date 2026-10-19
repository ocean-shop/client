import type { TermsSectionsProps } from "./types/terms-sections.types";

export function TermsSections({ sections }: TermsSectionsProps) {
  return (
    <div className="flex flex-col gap-[18px] rounded-2xl bg-background p-[18px] lg:gap-6 lg:px-8 lg:py-7">
      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="flex scroll-mt-[220px] flex-col gap-2 lg:scroll-mt-[140px]"
        >
          <h2 className="text-[15px] font-semibold text-foreground lg:text-base">
            {section.title}
          </h2>
          <p className="text-pretty text-sm leading-[1.7] text-muted">{section.text}</p>
        </section>
      ))}
    </div>
  );
}
