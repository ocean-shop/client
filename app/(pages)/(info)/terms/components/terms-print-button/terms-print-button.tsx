"use client";

import { TERMS_PRINT_BUTTON_LABEL } from "./constants/terms-print-button.constants";
import { buildTermsPrintDocumentHelper } from "./helpers/build-terms-print-document";
import { printHtmlDocumentHelper } from "./helpers/print-html-document";
import type { TermsPrintButtonProps } from "./types/terms-print-button.types";

/**
 * No PDF is published yet, so the browser's print dialog ("Save as PDF") stands in for it.
 * It prints a separate document with only the offer's sections, not the page around them.
 */
export const TermsPrintButton = ({ sections, documentTitle }: TermsPrintButtonProps) => {
  const handleClick = () => {
    printHtmlDocumentHelper(buildTermsPrintDocumentHelper(sections, documentTitle));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="font-semibold text-accent hover:text-accent-dark"
    >
      {TERMS_PRINT_BUTTON_LABEL}
    </button>
  );
};
