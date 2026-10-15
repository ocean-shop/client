"use client";

import { useState } from "react";
import { DEFAULT_API_ERROR_MESSAGE } from "@/app/core/api/constants/api.constants";
import { toastStore } from "@/app/core/providers/toast-provider/toast-store";
import { Button } from "@/app/ui/button/button";
import { removeUserShippingAction } from "../../../../actions/remove-user-shipping";
import { setMainUserShippingAction } from "../../../../actions/set-main-user-shipping";
import type { UserShippingView } from "../../../../types/addresses.types";
import { CabinetAddressCard } from "./components/cabinet-address-card/cabinet-address-card";
import { CabinetAddressForm } from "./components/cabinet-address-form/cabinet-address-form";
import { CabinetAddressRemoveModal } from "./components/cabinet-address-remove-modal/cabinet-address-remove-modal";
import {
  CABINET_ADDRESS_BOOK_ADD_LABEL,
  CABINET_ADDRESS_BOOK_EMPTY_LABEL,
  CABINET_ADDRESS_BOOK_ERROR_TOAST_TITLES,
  CABINET_ADDRESS_BOOK_STATUS_LABELS,
  CABINET_ADDRESS_BOOK_TITLES,
} from "./constants/cabinet-address-book.constants";
import { getCabinetAddressErrorMessageHelper } from "./helpers/get-cabinet-address-error-message";
import type {
  CabinetAddressBookProps,
  CabinetAddressBookStatus,
} from "./types/cabinet-address-book.types";

/** The saved addresses, swapped for the add form while a new one is being filled in. */
export function CabinetAddressBook({ addresses }: CabinetAddressBookProps) {
  const [isAdding, setIsAdding] = useState(false);
  const [status, setStatus] = useState<CabinetAddressBookStatus | null>(null);
  const [pendingId, setPendingId] = useState<string | null>(null);
  const [removingAddress, setRemovingAddress] = useState<UserShippingView | null>(null);
  const [isRemoveOpen, setIsRemoveOpen] = useState(false);

  const isRemoving = pendingId !== null && pendingId === removingAddress?.id;

  function handleAdd() {
    setStatus(null);
    setIsAdding(true);
  }

  function handleSaved() {
    setIsAdding(false);
    setStatus("saved");
  }

  async function handleSetMain(address: UserShippingView) {
    if (pendingId) return;

    setStatus(null);
    setPendingId(address.id);

    try {
      const result = await setMainUserShippingAction(address.id);

      if (!result.ok) {
        toastStore.error(
          CABINET_ADDRESS_BOOK_ERROR_TOAST_TITLES.setMain,
          getCabinetAddressErrorMessageHelper(result)
        );
        return;
      }

      setStatus("main");
    } catch {
      toastStore.error(CABINET_ADDRESS_BOOK_ERROR_TOAST_TITLES.setMain, DEFAULT_API_ERROR_MESSAGE);
    } finally {
      setPendingId(null);
    }
  }

  function handleRemoveOpen(address: UserShippingView) {
    setRemovingAddress(address);
    setIsRemoveOpen(true);
  }

  function handleRemoveClose() {
    if (!isRemoving) setIsRemoveOpen(false);
  }

  async function handleRemoveConfirm() {
    if (!removingAddress || pendingId) return;

    setStatus(null);
    setPendingId(removingAddress.id);

    try {
      const result = await removeUserShippingAction(removingAddress.id);

      if (!result.ok) {
        toastStore.error(
          CABINET_ADDRESS_BOOK_ERROR_TOAST_TITLES.remove,
          getCabinetAddressErrorMessageHelper(result)
        );
        return;
      }

      setIsRemoveOpen(false);
      setStatus("removed");
    } catch {
      toastStore.error(CABINET_ADDRESS_BOOK_ERROR_TOAST_TITLES.remove, DEFAULT_API_ERROR_MESSAGE);
    } finally {
      setPendingId(null);
    }
  }

  return (
    <section className="flex flex-col gap-3.5 rounded-2xl bg-background p-[18px] lg:p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-[15.5px] font-semibold text-foreground">
          {CABINET_ADDRESS_BOOK_TITLES[isAdding ? "adding" : "list"]}
        </h2>
        {!isAdding && (
          <Button
            variant="text"
            size="auto"
            onClick={handleAdd}
            className="!gap-[5px] text-[13.5px]"
          >
            <span className="font-symbols text-lg">add</span>
            {CABINET_ADDRESS_BOOK_ADD_LABEL}
          </Button>
        )}
      </div>

      {isAdding ? (
        <CabinetAddressForm
          canChooseMain={addresses.length > 0}
          onCancel={() => setIsAdding(false)}
          onSaved={handleSaved}
        />
      ) : addresses.length > 0 ? (
        <div className="grid gap-3 lg:grid-cols-2">
          {addresses.map((address) => (
            <CabinetAddressCard
              key={address.id}
              address={address}
              onSetMain={() => handleSetMain(address)}
              onRemove={() => handleRemoveOpen(address)}
              disabled={pendingId !== null}
            />
          ))}
        </div>
      ) : (
        <p className="text-sm text-muted-light">{CABINET_ADDRESS_BOOK_EMPTY_LABEL}</p>
      )}

      {status && (
        <div
          className="flex items-center gap-2 text-[13.5px] font-medium text-accent"
          role="status"
        >
          <span className="font-symbols text-[18px]">check_circle</span>
          {CABINET_ADDRESS_BOOK_STATUS_LABELS[status]}
        </div>
      )}

      <CabinetAddressRemoveModal
        address={removingAddress}
        isOpen={isRemoveOpen}
        isRemoving={isRemoving}
        onClose={handleRemoveClose}
        onConfirm={handleRemoveConfirm}
      />
    </section>
  );
}
