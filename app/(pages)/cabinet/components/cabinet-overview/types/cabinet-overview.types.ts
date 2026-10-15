import type { CabinetOverview } from "../../../types/cabinet.types";
import type { CabinetStatCardProps } from "../components/cabinet-stat-card/types/cabinet-stat-card.types";

export type CabinetOverviewProps = {
  overview: CabinetOverview;
};

export type CabinetOverviewStat = CabinetStatCardProps & { id: string };
