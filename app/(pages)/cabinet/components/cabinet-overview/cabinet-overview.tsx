import { CabinetActiveOrder } from "./components/cabinet-active-order/cabinet-active-order";
import { CabinetRecentFavorites } from "./components/cabinet-recent-favorites/cabinet-recent-favorites";
import { CabinetStatCard } from "./components/cabinet-stat-card/cabinet-stat-card";
import {
  CABINET_OVERVIEW_NAMED_TITLE_PREFIX,
  CABINET_OVERVIEW_TEXT,
  CABINET_OVERVIEW_TITLE,
} from "./constants/cabinet-overview.constants";
import { buildCabinetOverviewStatsHelper } from "./helpers/build-cabinet-overview-stats";
import type { CabinetOverviewProps } from "./types/cabinet-overview.types";

/** The cabinet's landing page: the order on its way, shortcuts to each section, recent favourites. */
export const CabinetOverview = ({ overview }: CabinetOverviewProps) => {
  const stats = buildCabinetOverviewStatsHelper(overview);

  return (
    <div className="flex flex-col gap-3.5 lg:gap-[18px]">
      <div className="flex flex-col gap-1.5">
        <h1 className="font-heading text-xl font-semibold tracking-[-.025em] text-foreground lg:text-[26px]">
          {overview.greetingName
            ? `${CABINET_OVERVIEW_NAMED_TITLE_PREFIX} ${overview.greetingName}`
            : CABINET_OVERVIEW_TITLE}
        </h1>
        <p className="text-sm text-muted">{CABINET_OVERVIEW_TEXT}</p>
      </div>

      {overview.activeOrder && <CabinetActiveOrder order={overview.activeOrder} />}

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-3 lg:gap-4">
        {stats.map(({ id, ...stat }) => (
          <CabinetStatCard key={id} {...stat} />
        ))}
      </div>

      {overview.favorites.length > 0 && <CabinetRecentFavorites products={overview.favorites} />}
    </div>
  );
};
