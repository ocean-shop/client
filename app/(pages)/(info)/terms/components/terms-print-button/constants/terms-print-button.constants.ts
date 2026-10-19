export const TERMS_PRINT_BUTTON_LABEL = "Завантажити PDF";

/** Plain black-on-white typography for paper; the site's fonts are not loaded in the print frame. */
export const TERMS_PRINT_DOCUMENT_STYLES = `
  @page { margin: 20mm 18mm; }
  body { margin: 0; font-family: Arial, Helvetica, sans-serif; color: #000; }
  section { margin: 0 0 16px; break-inside: avoid; }
  h2 { margin: 0 0 6px; font-size: 14pt; font-weight: 600; }
  p { margin: 0; font-size: 11pt; line-height: 1.6; }
`;
