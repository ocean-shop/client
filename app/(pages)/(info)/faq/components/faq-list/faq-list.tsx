"use client";

import { useState } from "react";
import { FaqItem } from "./components/faq-item/faq-item";
import { FAQ_LIST_INITIAL_OPEN_INDEX } from "./constants/faq-list.constants";
import type { FaqListProps } from "./types/faq-list.types";

/** Accordion of questions where one answer is open at a time. */
export function FaqList({ items }: FaqListProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(FAQ_LIST_INITIAL_OPEN_INDEX);

  return (
    <div className="flex flex-col rounded-2xl bg-background px-[18px] py-1 lg:px-6 lg:py-1.5">
      {items.map((item, index) => (
        <FaqItem
          key={item.question}
          entry={item}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}
