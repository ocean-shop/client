"use client";

import { useBodyScrollLock } from "@/app/core/hooks/use-body-scroll-lock";
import { useEscapeKey } from "@/app/core/hooks/use-escape-key";
import { ModalHeader } from "./components/modal-header/modal-header";
import {
  MODAL_BODY_CLASS_NAME,
  MODAL_DEFAULT_CLOSE_LABEL,
  MODAL_OVERLAY_CLASS_NAME,
  MODAL_OVERLAY_STATE_CLASS_NAMES,
  MODAL_PANEL_CLASS_NAME,
  MODAL_PANEL_STATE_CLASS_NAMES,
} from "./constants/modal.constants";
import type { ModalProps } from "./types/modal.types";

/** Stays mounted while closed so it can animate both ways; `inert` keeps it out of the tab order. */
export const Modal = ({
  isOpen,
  onClose,
  title,
  subtitle,
  closeLabel = MODAL_DEFAULT_CLOSE_LABEL,
  footer,
  children,
}: ModalProps) => {
  const state = isOpen ? "open" : "closed";

  useEscapeKey(onClose, isOpen);
  useBodyScrollLock(isOpen);

  return (
    <>
      <div
        onClick={onClose}
        aria-hidden="true"
        className={`${MODAL_OVERLAY_CLASS_NAME} ${MODAL_OVERLAY_STATE_CLASS_NAMES[state]}`}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        aria-hidden={!isOpen}
        inert={!isOpen}
        className={`${MODAL_PANEL_CLASS_NAME} ${MODAL_PANEL_STATE_CLASS_NAMES[state]}`}
      >
        <div className="flex justify-center pt-2.5 lg:hidden">
          <span className="h-1 w-10 rounded-sm bg-footer-border" />
        </div>

        <ModalHeader title={title} subtitle={subtitle} closeLabel={closeLabel} onClose={onClose} />

        <div className={MODAL_BODY_CLASS_NAME}>{children}</div>

        {footer}
      </div>
    </>
  );
};
