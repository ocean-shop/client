export type ProductReviewRatingPickerProps = {
  /** `0` until a star is picked. */
  value: number;
  error?: string | null;
  disabled?: boolean;
  onChange: (rating: number) => void;
};
