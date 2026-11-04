import { HEADER_SEARCH_PANEL_IMAGE_CLASS_NAMES } from "../../constants/header-search-panel.constants";
import { HEADER_SEARCH_PANEL_SKELETON_COUNT } from "./constants/header-search-panel-skeleton.constants";
import type { HeaderSearchPanelSkeletonProps } from "./types/header-search-panel-skeleton.types";

export const HeaderSearchPanelSkeleton = ({ variant }: HeaderSearchPanelSkeletonProps) => {
  return Array.from({ length: HEADER_SEARCH_PANEL_SKELETON_COUNT }, (_, index) => (
    <div key={index} aria-hidden className="flex animate-pulse items-center gap-3 p-2">
      <div className={HEADER_SEARCH_PANEL_IMAGE_CLASS_NAMES[variant]} />
      <div className="flex flex-1 flex-col gap-2">
        <div className="h-3.5 rounded bg-surface-strong" />
        <div className="h-3.5 w-2/3 rounded bg-surface-strong" />
      </div>
    </div>
  ));
};
