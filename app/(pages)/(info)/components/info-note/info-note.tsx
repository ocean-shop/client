import { MaterialIcon } from "@/app/ui/material-icon/material-icon";
import { INFO_NOTE_ICON } from "./constants/info-note.constants";
import type { InfoNoteProps } from "./types/info-note.types";

/** Tinted callout with a fine-print remark at the bottom of a page. */
export const InfoNote = ({ text }: InfoNoteProps) => {
  return (
    <p className="flex items-start gap-2.5 rounded-xl bg-accent-soft px-4 py-3.5 text-sm leading-[1.55] text-accent-dark">
      <MaterialIcon
        name={INFO_NOTE_ICON}
        className="flex-none text-xl leading-[inherit] text-accent"
      />
      <span>{text}</span>
    </p>
  );
};
