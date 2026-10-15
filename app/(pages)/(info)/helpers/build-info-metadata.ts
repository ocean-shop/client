import type { Metadata } from "next";
import { INFO_METADATA_TITLE_SUFFIX } from "../constants/info.constants";

export function buildInfoMetadataHelper(title: string, description?: string): Metadata {
  return { title: `${title}${INFO_METADATA_TITLE_SUFFIX}`, description };
}
