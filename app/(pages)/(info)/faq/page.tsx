import { InfoPageHeader } from "../components/info-page-header/info-page-header";
import { buildInfoMetadataHelper } from "../helpers/build-info-metadata";
import { FaqList } from "./components/faq-list/faq-list";
import { FAQ_ITEMS, FAQ_LEAD, FAQ_TITLE } from "./constants/faq.constants";

export const metadata = buildInfoMetadataHelper(FAQ_TITLE, FAQ_LEAD);

export default function FaqPage() {
  return (
    <>
      <InfoPageHeader title={FAQ_TITLE} lead={FAQ_LEAD} />
      <FaqList items={FAQ_ITEMS} />
    </>
  );
}
