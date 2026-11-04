import { TERMS_PRINT_FRAME_STYLES } from "../constants/terms-print-button.constants";

/** Opens the print dialog for standalone HTML through a hidden iframe, removed once it is done. */
export const printHtmlDocumentHelper = (html: string): void => {
  const iframe = document.createElement("iframe");

  iframe.setAttribute("aria-hidden", "true");
  iframe.style.cssText = TERMS_PRINT_FRAME_STYLES;
  iframe.srcdoc = html;
  iframe.onload = () => {
    const frameWindow = iframe.contentWindow;

    if (!frameWindow) return iframe.remove();

    frameWindow.addEventListener("afterprint", () => iframe.remove());
    frameWindow.focus();
    frameWindow.print();
  };

  document.body.appendChild(iframe);
};
