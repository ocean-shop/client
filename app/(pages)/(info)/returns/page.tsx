import { InfoCard } from "../components/info-card/info-card";
import { InfoCheckList } from "../components/info-check-list/info-check-list";
import { InfoPageHeader } from "../components/info-page-header/info-page-header";
import { buildInfoMetadataHelper } from "../helpers/build-info-metadata";
import { ReturnsSteps } from "./components/returns-steps/returns-steps";
import {
  RETURNS_ALLOWED,
  RETURNS_ALLOWED_TITLE,
  RETURNS_DEFECT_TEXT,
  RETURNS_DEFECT_TITLE,
  RETURNS_EXCLUDED,
  RETURNS_EXCLUDED_SUBTITLE,
  RETURNS_EXCLUDED_TITLE,
  RETURNS_LEAD,
  RETURNS_STEPS,
  RETURNS_TITLE,
} from "./constants/returns.constants";

export const metadata = buildInfoMetadataHelper(RETURNS_TITLE, RETURNS_LEAD);

export default function ReturnsPage() {
  return (
    <>
      <InfoPageHeader title={RETURNS_TITLE} lead={RETURNS_LEAD} />

      <ReturnsSteps steps={RETURNS_STEPS} />

      <div className="grid gap-3 md:grid-cols-2 lg:gap-4">
        <InfoCard title={RETURNS_ALLOWED_TITLE}>
          <InfoCheckList items={RETURNS_ALLOWED} />
        </InfoCard>

        <InfoCard title={RETURNS_EXCLUDED_TITLE} subtitle={RETURNS_EXCLUDED_SUBTITLE}>
          <InfoCheckList items={RETURNS_EXCLUDED} variant="close" />
        </InfoCard>
      </div>

      <InfoCard title={RETURNS_DEFECT_TITLE}>
        <p className="text-pretty text-sm leading-[1.65] text-muted">{RETURNS_DEFECT_TEXT}</p>
      </InfoCard>
    </>
  );
}
