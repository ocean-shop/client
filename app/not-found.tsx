import type { Metadata } from "next";
import { NotFoundView } from "./components/not-found-view/not-found-view";
import { NOT_FOUND_METADATA_TITLE } from "./components/not-found-view/constants/not-found-view.constants";

export const metadata: Metadata = { title: NOT_FOUND_METADATA_TITLE };

export default function NotFound() {
  return <NotFoundView />;
}
