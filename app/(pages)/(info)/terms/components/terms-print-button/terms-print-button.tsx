"use client";

import { TERMS_PRINT_BUTTON_LABEL } from "./constants/terms-print-button.constants";
import { buildTermsPrintDocumentHelper } from "./helpers/build-terms-print-document";
import type { TermsPrintButtonProps } from "./types/terms-print-button.types";

/**
 * No PDF is published yet, so the browser's print dialog ("Save as PDF") stands in for it.
 * It prints a separate document with only the offer's sections, not the page around them.
 */
export const TermsPrintButton = ({ sections, documentTitle }: TermsPrintButtonProps) => {
  const handleClick = () => {
    const iframe = document.createElement("iframe");

    iframe.setAttribute("aria-hidden", "true");
    iframe.style.cssText = "position:fixed;width:0;height:0;border:0;visibility:hidden";
    iframe.srcdoc = buildTermsPrintDocumentHelper(sections, documentTitle);
    iframe.onload = () => {
      const frameWindow = iframe.contentWindow;

      if (!frameWindow) return iframe.remove();

      frameWindow.addEventListener("afterprint", () => iframe.remove());
      frameWindow.focus();
      frameWindow.print();
    };

    document.body.appendChild(iframe);
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
