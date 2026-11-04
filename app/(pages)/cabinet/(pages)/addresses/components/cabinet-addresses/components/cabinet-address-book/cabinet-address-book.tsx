"use client";

import { Button } from "@/app/ui/button/button";
import { MaterialIcon } from "@/app/ui/material-icon/material-icon";
import { SuccessMessage } from "@/app/ui/success-message/success-message";
import { SurfaceCard } from "@/app/ui/surface-card/surface-card";
import { CabinetSectionHeader } from "../../../../../../components/cabinet-section-header/cabinet-section-header";
import { CabinetAddressCard } from "./components/cabinet-address-card/cabinet-address-card";
import { CabinetAddressForm } from "./components/cabinet-address-form/cabinet-address-form";
import { CabinetAddressRemoveModal } from "./components/cabinet-address-remove-modal/cabinet-address-remove-modal";
import {
  CABINET_ADDRESS_BOOK_ADD_LABEL,
  CABINET_ADDRESS_BOOK_EMPTY_LABEL,
  CABINET_ADDRESS_BOOK_STATUS_LABELS,
  CABINET_ADDRESS_BOOK_TITLES,
} from "./constants/cabinet-address-book.constants";
import { useCabinetAddressBook } from "./hooks/use-cabinet-address-book";
import type { CabinetAddressBookProps } from "./types/cabinet-address-book.types";

/** The saved addresses, swapped for the add form while a new one is being filled in. */
export const CabinetAddressBook = ({ addresses }: CabinetAddressBookProps) => {
  const {
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
  } = useCabinetAddressBook();

  return (
    <SurfaceCard as="section" className="flex flex-col gap-3.5">
      <CabinetSectionHeader title={CABINET_ADDRESS_BOOK_TITLES[isAdding ? "adding" : "list"]}>
        {!isAdding && (
          <Button
            variant="text"
            size="auto"
            onClick={handleAdd}
            className="!gap-[5px] text-[13.5px]"
          >
            <MaterialIcon name="add" className="text-lg" />
            {CABINET_ADDRESS_BOOK_ADD_LABEL}
          </Button>
        )}
      </CabinetSectionHeader>

      {isAdding ? (
        <CabinetAddressForm
          canChooseMain={addresses.length > 0}
          onCancel={handleAddCancel}
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

      {status && <SuccessMessage>{CABINET_ADDRESS_BOOK_STATUS_LABELS[status]}</SuccessMessage>}

      <CabinetAddressRemoveModal
        address={removingAddress}
        isOpen={isRemoveOpen}
        isRemoving={isRemoving}
        onClose={handleRemoveClose}
        onConfirm={handleRemoveConfirm}
      />
    </SurfaceCard>
  );
};
