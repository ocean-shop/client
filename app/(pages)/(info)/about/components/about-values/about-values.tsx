import type { AboutValuesProps } from "./types/about-values.types";

export const AboutValues = ({ values }: AboutValuesProps) => {
  return (
    <ul className="grid gap-3 md:grid-cols-3 lg:gap-4">
      {values.map((value) => (
        <li key={value.title} className="flex flex-col gap-2">
          <span aria-hidden className="font-symbols text-2xl text-accent">
            {value.icon}
          </span>
          <span className="text-[15px] font-semibold text-foreground">{value.title}</span>
          <span className="text-[13.5px] leading-[1.55] text-muted">{value.text}</span>
        </li>
      ))}
    </ul>
  );
};
