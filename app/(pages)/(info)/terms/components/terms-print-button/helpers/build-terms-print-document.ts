import type { TermsSection } from "../../../types/terms.types";
import { TERMS_PRINT_DOCUMENT_STYLES } from "../constants/terms-print-button.constants";

const escapeHtml = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** Standalone HTML with only the offer's sections, for printing to PDF. */
export function buildTermsPrintDocumentHelper(
  sections: TermsSection[],
  documentTitle: string
): string {
  const body = sections
    .map(
      (section) =>
        `<section><h2>${escapeHtml(section.title)}</h2><p>${escapeHtml(section.text)}</p></section>`
    )
    .join("");

  return `<!doctype html><html lang="uk"><head><meta charset="utf-8"><title>${escapeHtml(
    documentTitle
  )}</title><style>${TERMS_PRINT_DOCUMENT_STYLES}</style></head><body>${body}</body></html>`;
}
