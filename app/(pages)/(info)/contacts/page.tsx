import { InfoCard } from "../components/info-card/info-card";
import { InfoPageHeader } from "../components/info-page-header/info-page-header";
import { buildInfoMetadataHelper } from "../helpers/build-info-metadata";
import { ContactsChannels } from "./components/contacts-channels/contacts-channels";
import { ContactsForm } from "./components/contacts-form/contacts-form";
import { ContactsRequisites } from "./components/contacts-requisites/contacts-requisites";
import {
  CONTACTS_CHANNELS,
  CONTACTS_FORM_TITLE,
  CONTACTS_LEAD,
  CONTACTS_MAP_CAPTION,
  CONTACTS_REQUISITES,
  CONTACTS_REQUISITES_TITLE,
  CONTACTS_SHOWROOM_LINES,
  CONTACTS_SHOWROOM_TITLE,
  CONTACTS_TITLE,
} from "./constants/contacts.constants";

export const metadata = buildInfoMetadataHelper(CONTACTS_TITLE, CONTACTS_LEAD);

export default function ContactsPage() {
  return (
    <>
      <InfoPageHeader title={CONTACTS_TITLE} lead={CONTACTS_LEAD} />

      <ContactsChannels channels={CONTACTS_CHANNELS} />

      <div className="grid gap-3 lg:grid-cols-[1.1fr_1fr] lg:gap-4">
        <InfoCard title={CONTACTS_SHOWROOM_TITLE}>
          {/* Placeholder until the map embed is chosen. */}
          <div className="flex h-40 items-end rounded-xl bg-surface-strong p-3 lg:h-[190px]">
            <span className="text-[13px] text-muted">{CONTACTS_MAP_CAPTION}</span>
          </div>
          <address className="flex flex-col text-pretty text-sm not-italic leading-[1.65] text-muted">
            {CONTACTS_SHOWROOM_LINES.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </address>
        </InfoCard>

        <InfoCard title={CONTACTS_FORM_TITLE}>
          <ContactsForm />
        </InfoCard>
      </div>

      <InfoCard title={CONTACTS_REQUISITES_TITLE}>
        <ContactsRequisites requisites={CONTACTS_REQUISITES} />
      </InfoCard>
    </>
  );
}
