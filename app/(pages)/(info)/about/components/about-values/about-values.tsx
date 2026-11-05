import { MaterialIcon } from "@/app/ui/material-icon/material-icon";
import type { AboutValuesProps } from "./types/about-values.types";

export const AboutValues = ({ values }: AboutValuesProps) => {
  return (
    <ul className="grid gap-3 md:grid-cols-3 lg:gap-4">
      {values.map((value) => (
        <li key={value.title} className="flex flex-col gap-2">
          <MaterialIcon name={value.icon} className="text-2xl text-accent" />
          <span className="text-[15px] font-semibold text-foreground">{value.title}</span>
          <span className="text-[13.5px] leading-[1.55] text-muted">{value.text}</span>
        </li>
      ))}
    </ul>
  );
};
