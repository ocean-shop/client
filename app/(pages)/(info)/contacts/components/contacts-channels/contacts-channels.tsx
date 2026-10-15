import type { ContactsChannelsProps } from "./types/contacts-channels.types";

export function ContactsChannels({ channels }: ContactsChannelsProps) {
  return (
    <ul className="grid gap-3 md:grid-cols-2 lg:gap-4">
      {channels.map((channel) => (
        <li key={channel.value} className="flex gap-3 rounded-2xl bg-background p-4 lg:p-5">
          <span
            aria-hidden
            className="flex h-[42px] w-[42px] flex-none items-center justify-center rounded-[11px] bg-accent-soft font-symbols text-[21px] text-accent"
          >
            {channel.icon}
          </span>
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
        </li>
      ))}
    </ul>
  );
}
