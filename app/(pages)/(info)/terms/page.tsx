import { InfoPageHeader } from "../components/info-page-header/info-page-header";
import { buildInfoMetadataHelper } from "../helpers/build-info-metadata";
import { INFO_TERMS_PATH } from "../constants/info.constants";
import { TermsPrintButton } from "./components/terms-print-button/terms-print-button";
import { TermsSections } from "./components/terms-sections/terms-sections";
import { TERMS_EDITION, TERMS_SECTIONS, TERMS_TITLE } from "./constants/terms.constants";

export const metadata = buildInfoMetadataHelper(INFO_TERMS_PATH, TERMS_TITLE);

export default function TermsPage() {
  return (
    <>
      <InfoPageHeader
        title={TERMS_TITLE}
        meta={
          <>
            {TERMS_EDITION} ·{" "}
            <TermsPrintButton sections={TERMS_SECTIONS} documentTitle={TERMS_TITLE} />
          </>
        }
      />

      <TermsSections sections={TERMS_SECTIONS} />
    </>
  );
}
