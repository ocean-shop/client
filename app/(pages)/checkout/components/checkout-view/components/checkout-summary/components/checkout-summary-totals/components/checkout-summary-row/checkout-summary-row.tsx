import type { CheckoutSummaryRowProps } from "./types/checkout-summary-row.types";

export const CheckoutSummaryRow = ({ label, className, children }: CheckoutSummaryRowProps) => {
  return (
    <div className={`flex justify-between ${className ?? ""}`}>
      <span>{label}</span>
      <span>{children}</span>
    </div>
  );
};
