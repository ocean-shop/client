import { CABINET_HOME_PATH } from "../constants/cabinet.constants";

/** The overview matches only itself; every other section also owns its nested pages. */
export function isCabinetPathActiveHelper(href: string, pathname: string): boolean {
  if (href === CABINET_HOME_PATH) return pathname === href;

  return pathname === href || pathname.startsWith(`${href}/`);
}
