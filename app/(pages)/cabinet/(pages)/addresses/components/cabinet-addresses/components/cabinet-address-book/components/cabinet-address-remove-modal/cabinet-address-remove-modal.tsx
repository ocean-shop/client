"use client";

import { Button } from "@/app/ui/button/button";
import { Modal } from "@/app/ui/modal/modal";
import {
  CABINET_ADDRESS_REMOVE_MODAL_CANCEL_LABEL,
  CABINET_ADDRESS_REMOVE_MODAL_CONFIRM_LABEL,
  CABINET_ADDRESS_REMOVE_MODAL_MAIN_NOTE,
  CABINET_ADDRESS_REMOVE_MODAL_TEXT,
  CABINET_ADDRESS_REMOVE_MODAL_TITLE,
} from "./constants/cabinet-address-remove-modal.constants";
import type { CabinetAddressRemoveModalProps } from "./types/cabinet-address-remove-modal.types";

/** Asks before an address is removed, since there is no way to bring it back. */
export const CabinetAddressRemoveModal = ({
  address,
  isOpen,
  isRemoving,
  onClose,
  onConfirm,
}: CabinetAddressRemoveModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={CABINET_ADDRESS_REMOVE_MODAL_TITLE}
      footer={
        <div className="flex flex-col-reverse gap-2.5 border-t border-surface px-4.5 py-3.5 lg:flex-row lg:justify-end lg:px-6 lg:py-4">
          <Button
            variant="outline"
            size="auto"
            onClick={onClose}
            disabled={isRemoving}
            className="h-[46px] rounded-[11px] px-5 text-sm"
          >
            {CABINET_ADDRESS_REMOVE_MODAL_CANCEL_LABEL}
          </Button>
          <Button
            size="auto"
            onClick={onConfirm}
            disabled={isRemoving}
            className="h-[46px] rounded-[11px] !bg-error-dark px-6 text-sm"
          >
            {CABINET_ADDRESS_REMOVE_MODAL_CONFIRM_LABEL}
          </Button>
        </div>
      }
    >
      <div className="flex flex-col gap-3 py-4">
        <p className="text-sm text-muted">{CABINET_ADDRESS_REMOVE_MODAL_TEXT}</p>
        {address && (
          <div className="flex flex-col gap-1 rounded-xl bg-surface-soft px-3.5 py-3">
            <span className="text-[14.5px] font-semibold text-foreground">{address.title}</span>
            <span className="break-words text-[13.5px] text-muted">{address.address}</span>
          </div>
        )}
        {address?.isMain && (
          <p className="text-[13px] text-muted-light">{CABINET_ADDRESS_REMOVE_MODAL_MAIN_NOTE}</p>
        )}
      </div>
    </Modal>
  );
};
