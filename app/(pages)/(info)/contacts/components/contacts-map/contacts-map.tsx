import {
  CONTACTS_MAP_EMBED_URL,
  CONTACTS_MAP_LINK_LABEL,
  CONTACTS_MAP_LINK_URL,
  CONTACTS_MAP_TITLE,
} from "./constants/contacts-map.constants";

export function ContactsMap() {
  return (
    <div className="relative h-40 overflow-hidden rounded-xl bg-surface-strong lg:h-[190px]">
      <iframe
        title={CONTACTS_MAP_TITLE}
        src={CONTACTS_MAP_EMBED_URL}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="size-full border-0"
      />
      <a
        href={CONTACTS_MAP_LINK_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-2 left-2 rounded-lg bg-surface-strong px-2 py-1 text-[13px] text-muted hover:underline"
      >
        {CONTACTS_MAP_LINK_LABEL}
      </a>
    </div>
  );
}
