import { IconTile } from "@/app/ui/icon-tile/icon-tile";
import { SurfaceCard } from "@/app/ui/surface-card/surface-card";
import type { ContactsChannelsProps } from "./types/contacts-channels.types";

export const ContactsChannels = ({ channels }: ContactsChannelsProps) => {
  return (
    <ul className="grid gap-3 md:grid-cols-2 lg:gap-4">
      {channels.map((channel) => (
        <SurfaceCard key={channel.value} as="li" padding="sm" className="flex gap-3">
          <IconTile name={channel.icon} size="lg" />
          <div className="flex min-w-0 flex-col gap-[3px]">
            <span className="text-[13px] text-muted-light">{channel.label}</span>
            <a
              href={channel.href}
              className="text-[15px] font-semibold text-foreground hover:text-accent"
            >
              {channel.value}
            </a>
            <span className="text-[13px] leading-[1.45] text-muted">{channel.note}</span>
          </div>
        </SurfaceCard>
      ))}
    </ul>
  );
};
