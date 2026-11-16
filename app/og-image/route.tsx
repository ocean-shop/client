import { ImageResponse } from "next/og";
import {
  SEO_MANIFEST_THEME_COLOR,
  SEO_OG_IMAGE_SIZE,
} from "@/app/shared/seo/constants/seo.constants";
import {
  OG_IMAGE_ICON_COLOR,
  OG_IMAGE_ICON_SCALE,
  OG_IMAGE_ICON_VIEW_BOX,
  OG_IMAGE_WAVES_ICON_PATH,
} from "./constants/og-image.constants";

// Nothing here depends on the request, so the PNG is rendered once at build time.
export const dynamic = "force-static";

export const GET = () => {
  const iconSize = SEO_OG_IMAGE_SIZE.width * OG_IMAGE_ICON_SCALE;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: SEO_MANIFEST_THEME_COLOR,
      }}
    >
      <svg width={iconSize} height={iconSize} viewBox={OG_IMAGE_ICON_VIEW_BOX}>
        <path d={OG_IMAGE_WAVES_ICON_PATH} fill={OG_IMAGE_ICON_COLOR} />
      </svg>
    </div>,
    SEO_OG_IMAGE_SIZE
  );
};
