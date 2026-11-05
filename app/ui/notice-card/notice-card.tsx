import { ButtonLink } from "../button-link/button-link";
import { MaterialIcon } from "../material-icon/material-icon";
import { SurfaceCard } from "../surface-card/surface-card";
import {
  NOTICE_CARD_BASE_CLASS_NAME,
  NOTICE_CARD_LINK_ICON,
} from "./constants/notice-card.constants";
import type { NoticeCardProps } from "./types/notice-card.types";

/** What a whole page shows when it has nothing to show, with a link to carry on from. */
export const NoticeCard = ({ icon, title, text, link }: NoticeCardProps) => {
  return (
    <SurfaceCard padding="none" className={NOTICE_CARD_BASE_CLASS_NAME}>
      <MaterialIcon name={icon} className="text-[40px] text-muted-light" />
      <span className="font-heading text-lg font-semibold text-foreground">{title}</span>
      <span className="text-[14.5px] text-muted">{text}</span>
      <ButtonLink href={link.href} size="lg" trailingIcon={NOTICE_CARD_LINK_ICON} className="mt-2">
        {link.label}
      </ButtonLink>
    </SurfaceCard>
  );
};
