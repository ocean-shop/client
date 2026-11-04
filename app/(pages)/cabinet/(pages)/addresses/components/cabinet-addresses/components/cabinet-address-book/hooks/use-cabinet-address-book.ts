"use client";

import { useState } from "react";
import { runCabinetActionHelper } from "../../../../../../../helpers/run-cabinet-action";
import { removeUserShippingAction } from "../../../../../actions/remove-user-shipping";
import { setMainUserShippingAction } from "../../../../../actions/set-main-user-shipping";
import type {
  UserShippingActionResult,
  UserShippingView,
} from "../../../../../types/addresses.types";
import { CABINET_ADDRESS_BOOK_ERROR_TOAST_TITLES } from "../constants/cabinet-address-book.constants";
import type { CabinetAddressBookStatus } from "../types/cabinet-address-book.types";

/** Whether the add form is open, the changes made to saved addresses and how the last one went. */
export const useCabinetAddressBook = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [status, setStatus] = useState<CabinetAddressBookStatus | null>(null);
  const [pendingId, setPendingId] = useState<string | null>(null);
  const [removingAddress, setRemovingAddress] = useState<UserShippingView | null>(null);
  const [isRemoveOpen, setIsRemoveOpen] = useState(false);

  const isRemoving = pendingId !== null && pendingId === removingAddress?.id;

  const runChange = async (
    addressId: string,
    action: () => Promise<UserShippingActionResult>,
    errorToastTitle: string
  ) => {
    setStatus(null);
    setPendingId(addressId);

    const isDone = await runCabinetActionHelper(action, errorToastTitle);

    setPendingId(null);

    return isDone;
  };

  const handleAdd = () => {
    setStatus(null);
    setIsAdding(true);
  };

  const handleAddCancel = () => {
    setIsAdding(false);
  };

  const handleSaved = () => {
    setIsAdding(false);
    setStatus("saved");
  };

  const handleSetMain = async ({ id }: UserShippingView) => {
    if (pendingId) return;

    const isDone = await runChange(
      id,
      () => setMainUserShippingAction(id),
      CABINET_ADDRESS_BOOK_ERROR_TOAST_TITLES.setMain
    );

    if (isDone) setStatus("main");
  };

  const handleRemoveOpen = (address: UserShippingView) => {
    setRemovingAddress(address);
    setIsRemoveOpen(true);
  };

  const handleRemoveClose = () => {
    if (!isRemoving) setIsRemoveOpen(false);
  };

  const handleRemoveConfirm = async () => {
    if (!removingAddress || pendingId) return;

    const { id } = removingAddress;
    const isDone = await runChange(
      id,
      () => removeUserShippingAction(id),
      CABINET_ADDRESS_BOOK_ERROR_TOAST_TITLES.remove
    );

    if (isDone) {
      setIsRemoveOpen(false);
      setStatus("removed");
    }
  };

  return {
    isAdding,
    status,
    pendingId,
    removingAddress,
    isRemoveOpen,
    isRemoving,
    handleAdd,
    handleAddCancel,
    handleSaved,
    handleSetMain,
    handleRemoveOpen,
    handleRemoveClose,
    handleRemoveConfirm,
  };
};
