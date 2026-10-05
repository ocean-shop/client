export const MODAL_CLOSE_KEY = "Escape";
export const MODAL_DEFAULT_CLOSE_LABEL = "Закрити";

/**
 * Below `lg` the modal is a bottom sheet sliding up from the edge; from `lg` it is a centred
 * dialog that fades in. The `lg:` translate keeps it centred in both states.
 */
export const MODAL_PANEL_CLASS_NAME =
  "fixed inset-x-0 bottom-0 z-50 flex max-h-[92dvh] flex-col overflow-hidden rounded-t-[22px] bg-background shadow-[0_30px_80px_-30px_rgba(17,28,45,.55)] transition-[translate,opacity] duration-300 ease-out lg:inset-x-auto lg:bottom-auto lg:left-1/2 lg:top-1/2 lg:max-h-[86dvh] lg:w-[640px] lg:-translate-x-1/2 lg:rounded-[20px]";

export const MODAL_PANEL_STATE_CLASS_NAMES = {
  open: "translate-y-0 lg:-translate-y-1/2 lg:opacity-100",
  closed: "pointer-events-none translate-y-full lg:-translate-y-[46%] lg:opacity-0",
};
