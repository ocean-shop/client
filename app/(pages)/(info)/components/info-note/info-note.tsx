import { INFO_NOTE_ICON } from "./constants/info-note.constants";
import type { InfoNoteProps } from "./types/info-note.types";

/** Tinted callout with a fine-print remark at the bottom of a page. */
export function InfoNote({ text }: InfoNoteProps) {
  return (
    <p className="flex items-start gap-2.5 rounded-xl bg-accent-soft px-4 py-3.5 text-sm leading-[1.55] text-accent-dark">
      <span aria-hidden className="flex-none font-symbols text-xl leading-[inherit] text-accent">
        {INFO_NOTE_ICON}
      </span>
      <span>{text}</span>
    </p>
  );
}
