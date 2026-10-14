"use client";

import { useState } from "react";
import { Button } from "@/app/ui/button/button";
import { CabinetAddressCard } from "./components/cabinet-address-card/cabinet-address-card";
import { CabinetAddressForm } from "./components/cabinet-address-form/cabinet-address-form";
import {
  CABINET_ADDRESS_BOOK_ADD_LABEL,
  CABINET_ADDRESS_BOOK_EMPTY_LABEL,
  CABINET_ADDRESS_BOOK_SAVED_LABEL,
  CABINET_ADDRESS_BOOK_TITLES,
} from "./constants/cabinet-address-book.constants";
import type { CabinetAddressBookProps } from "./types/cabinet-address-book.types";

/** The saved addresses, swapped for the add form while a new one is being filled in. */
export function CabinetAddressBook({ addresses }: CabinetAddressBookProps) {
  const [isAdding, setIsAdding] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  function handleAdd() {
    setIsSaved(false);
    setIsAdding(true);
  }

  function handleSaved() {
    setIsAdding(false);
    setIsSaved(true);
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
        <CabinetAddressForm onCancel={() => setIsAdding(false)} onSaved={handleSaved} />
      ) : addresses.length > 0 ? (
        <div className="grid gap-3 lg:grid-cols-2">
          {addresses.map((address) => (
            <CabinetAddressCard key={address.id} address={address} />
          ))}
        </div>
      ) : (
        <p className="text-sm text-muted-light">{CABINET_ADDRESS_BOOK_EMPTY_LABEL}</p>
      )}

      {isSaved && (
        <div
          className="flex items-center gap-2 text-[13.5px] font-medium text-accent"
          role="status"
        >
          <span className="font-symbols text-[18px]">check_circle</span>
          {CABINET_ADDRESS_BOOK_SAVED_LABEL}
        </div>
      )}
    </section>
  );
}
