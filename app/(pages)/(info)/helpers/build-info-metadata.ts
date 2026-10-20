import type { Metadata } from "next";
import { buildSeoMetadataHelper } from "@/app/shared/seo/helpers/build-seo-metadata";

export function buildInfoMetadataHelper(
  path: string,
  title: string,
  description?: string
): Metadata {
  return buildSeoMetadataHelper({ title, description, path });
}
