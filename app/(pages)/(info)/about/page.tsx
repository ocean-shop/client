import { InfoCard } from "../components/info-card/info-card";
import { InfoPageHeader } from "../components/info-page-header/info-page-header";
import { buildInfoMetadataHelper } from "../helpers/build-info-metadata";
import { INFO_ABOUT_PATH } from "../constants/info.constants";
import { AboutStats } from "./components/about-stats/about-stats";
import { AboutValues } from "./components/about-values/about-values";
import {
  ABOUT_LEAD,
  ABOUT_PHOTO_CAPTION,
  ABOUT_STATS,
  ABOUT_TITLE,
  ABOUT_VALUES,
  ABOUT_VALUES_TITLE,
} from "./constants/about.constants";

export const metadata = buildInfoMetadataHelper(INFO_ABOUT_PATH, ABOUT_TITLE, ABOUT_LEAD);

const AboutPage = () => {
  return (
    <>
      <InfoPageHeader title={ABOUT_TITLE} lead={ABOUT_LEAD} />

      {/* Placeholder until the team or warehouse photo arrives. */}
      <div className="flex h-[200px] items-end rounded-[18px] bg-surface-strong p-[18px] lg:h-[300px]">
        <span className="text-[13px] text-muted">{ABOUT_PHOTO_CAPTION}</span>
      </div>

      <AboutStats stats={ABOUT_STATS} />

      <InfoCard title={ABOUT_VALUES_TITLE}>
        <AboutValues values={ABOUT_VALUES} />
      </InfoCard>
    </>
  );
};

export default AboutPage;
