"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/app/ui/button/button";
import type { SelectProps } from "./types/select.types";

export function Select({ options, label, selectedId, defaultSelectedId, onChange }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [internalSelectedId, setInternalSelectedId] = useState(defaultSelectedId ?? options[0]?.id);
  const selectRef = useRef<HTMLDivElement>(null);

  const activeId = selectedId ?? internalSelectedId;
  const selectedOption = options.find((option) => option.id === activeId) ?? options[0];

  useEffect(() => {
    if (!isOpen) return;

    function handlePointerDown(event: PointerEvent) {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [isOpen]);

  function handleSelect(id: string) {
    setInternalSelectedId(id);
    setIsOpen(false);
    onChange?.(id);
  }

  if (!selectedOption) return null;

  return (
    <div className="flex items-center gap-2.5">
      {label && <span className="text-[13.5px] text-muted-light">{label}</span>}

      <div ref={selectRef} className="relative">
        <Button
          variant="unstyled"
          size="auto"
          onClick={() => setIsOpen((open) => !open)}
          className="h-[42px] gap-2.5 rounded-[10px] border border-footer-border bg-background px-3.5 text-sm font-medium text-foreground"
        >
          {selectedOption.label}
          <span className="font-symbols text-xl text-muted-light">expand_more</span>
        </Button>

        {isOpen && (
          <div className="absolute right-0 top-[calc(100%+6px)] z-10 w-[252px] rounded-xl border border-border-soft bg-background p-1.5 shadow-[0_18px_40px_-22px_rgba(17,28,45,.45)]">
            {options.map((option) => {
              const isSelected = option.id === activeId;

              return (
                <div
                  key={option.id}
                  onClick={() => handleSelect(option.id)}
                  className={`flex cursor-pointer items-center gap-2 rounded-[9px] px-2.5 py-2.5 text-sm hover:bg-surface ${
                    isSelected ? "font-semibold text-accent-dark" : "font-normal text-foreground"
                  }`}
                >
                  <span className="w-[18px] font-symbols text-lg text-accent">
                    {isSelected ? "check" : ""}
                  </span>
                  {option.label}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
