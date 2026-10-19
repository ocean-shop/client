import type { TermsSection } from "../../../types/terms.types";

export type TermsPrintButtonProps = {
  sections: TermsSection[];
  /** Title of the print document, which browsers suggest as the PDF file name. */
  documentTitle: string;
};
