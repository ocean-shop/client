import { ImageResponse } from "next/og";
import { SEO_OG_IMAGE_SIZE } from "@/app/shared/seo/constants/seo.constants";
import { getShopSettings } from "@/app/shared/shop-settings/api/get-shop-settings";
import {
  OG_IMAGE_ICON_COLOR,
  OG_IMAGE_ICON_SCALE,
  OG_IMAGE_ICON_VIEW_BOX,
  OG_IMAGE_WAVES_ICON_PATH,
} from "./constants/og-image.constants";

// Rendered at build time and re-rendered in the background when the shop's accent color can have
// changed; matches `API_DEFAULT_REVALIDATE_SECONDS`, but segment config must be a literal.
export const revalidate = 300;

export const GET = async () => {
  const { colorScheme } = await getShopSettings();
  const iconSize = SEO_OG_IMAGE_SIZE.width * OG_IMAGE_ICON_SCALE;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: colorScheme.accent,
      }}
    >
      <svg width={iconSize} height={iconSize} viewBox={OG_IMAGE_ICON_VIEW_BOX}>
        <path d={OG_IMAGE_WAVES_ICON_PATH} fill={OG_IMAGE_ICON_COLOR} />
      </svg>
    </div>,
    SEO_OG_IMAGE_SIZE
  );
};
