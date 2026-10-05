"use client";

import { useEffect } from "react";
import { Button } from "@/app/ui/button/button";
import {
  MODAL_CLOSE_KEY,
  MODAL_DEFAULT_CLOSE_LABEL,
  MODAL_PANEL_CLASS_NAME,
  MODAL_PANEL_STATE_CLASS_NAMES,
} from "./constants/modal.constants";
import type { ModalProps } from "./types/modal.types";

/** Stays mounted while closed so it can animate both ways; `inert` keeps it out of the tab order. */
export function Modal({
  isOpen,
  onClose,
  title,
  subtitle,
  closeLabel = MODAL_DEFAULT_CLOSE_LABEL,
  footer,
  children,
}: ModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === MODAL_CLOSE_KEY) onClose();
    }

    // The page behind the overlay would otherwise scroll along with the modal body.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <>
      <div
        onClick={onClose}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-foreground/45 transition-opacity ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        aria-hidden={!isOpen}
        inert={!isOpen}
        className={`${MODAL_PANEL_CLASS_NAME} ${
          isOpen ? MODAL_PANEL_STATE_CLASS_NAMES.open : MODAL_PANEL_STATE_CLASS_NAMES.closed
        }`}
      >
        <div className="flex justify-center pt-2.5 lg:hidden">
          <span className="h-1 w-10 rounded-sm bg-footer-border" />
        </div>

        <div className="flex items-center gap-3 border-b border-surface px-4.5 py-3.5 lg:px-6 lg:py-[22px]">
          <div className="flex flex-1 items-baseline gap-2.5">
            <span className="font-heading text-[19px] font-semibold tracking-[-.02em] text-foreground lg:text-[22px]">
              {title}
            </span>
            {subtitle && <span className="text-[13.5px] text-muted-light">{subtitle}</span>}
          </div>

          <Button
            variant="unstyled"
            size="auto"
            onClick={onClose}
            aria-label={closeLabel}
            className="h-10 w-10 flex-none rounded-[11px] border border-footer-border bg-background text-foreground hover:bg-surface"
          >
            <span className="font-symbols text-[21px]">close</span>
          </Button>
        </div>

        <div className="flex flex-1 flex-col overflow-y-auto px-4.5 py-1 [scrollbar-width:none] lg:px-6 lg:py-1.5">
          {children}
        </div>

        {footer}
      </div>
    </>
  );
}
