import type { TermsSection } from "../../../types/terms.types";
import { TERMS_PRINT_DOCUMENT_STYLES } from "../constants/terms-print-button.constants";
import { escapeHtmlHelper } from "./escape-html";

/** Standalone HTML with only the offer's sections, for printing to PDF. */
export const buildTermsPrintDocumentHelper = (
  sections: TermsSection[],
  documentTitle: string
): string => {
  const body = sections
    .map(
      (section) =>
        `<section><h2>${escapeHtmlHelper(section.title)}</h2><p>${escapeHtmlHelper(section.text)}</p></section>`
    )
    .join("");

  return `<!doctype html><html lang="uk"><head><meta charset="utf-8"><title>${escapeHtmlHelper(
    documentTitle
  )}</title><style>${TERMS_PRINT_DOCUMENT_STYLES}</style></head><body>${body}</body></html>`;
};
