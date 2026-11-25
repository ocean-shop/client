import { useId, useState } from "react";
import { Button } from "@/app/ui/button/button";
import { FORM_FIELD_LABEL_CLASS_NAME } from "@/app/ui/form-field/constants/form-field.constants";
import { MaterialIcon } from "@/app/ui/material-icon/material-icon";
import {
  PRODUCT_REVIEW_RATING_PICKER_LABEL,
  PRODUCT_REVIEW_RATING_PICKER_PLACEHOLDER,
  PRODUCT_REVIEW_RATING_PICKER_STAR_BUTTON_CLASS_NAME,
  PRODUCT_REVIEW_RATING_PICKER_STAR_ICON,
  PRODUCT_REVIEW_RATING_PICKER_STAR_LABEL,
  PRODUCT_REVIEW_RATING_PICKER_STARS,
  PRODUCT_REVIEW_RATING_PICKER_WORDS,
} from "./constants/product-review-rating-picker.constants";
import type { ProductReviewRatingPickerProps } from "./types/product-review-rating-picker.types";

/** Five stars to pick a rating from; hovering previews a rating and names it. */
export const ProductReviewRatingPicker = ({
  value,
  error,
  disabled,
  onChange,
}: ProductReviewRatingPickerProps) => {
  const labelId = useId();
  const [hoveredRating, setHoveredRating] = useState(0);
  const shownRating = hoveredRating || value;

  return (
    <div className="flex flex-col gap-1.5 lg:gap-2">
      <span id={labelId} className={FORM_FIELD_LABEL_CLASS_NAME}>
        {PRODUCT_REVIEW_RATING_PICKER_LABEL}
      </span>

      <div className="flex flex-col gap-1.5 lg:flex-row lg:items-center lg:gap-3.5">
        <div
          role="group"
          aria-labelledby={labelId}
          onMouseLeave={() => setHoveredRating(0)}
          className="flex lg:gap-0.5"
        >
          {PRODUCT_REVIEW_RATING_PICKER_STARS.map((star) => (
            <Button
              key={star}
              variant="unstyled"
              size="auto"
              disabled={disabled}
              aria-label={PRODUCT_REVIEW_RATING_PICKER_STAR_LABEL(star)}
              aria-pressed={star === value}
              onClick={() => onChange(star)}
              onMouseEnter={() => setHoveredRating(star)}
              className={PRODUCT_REVIEW_RATING_PICKER_STAR_BUTTON_CLASS_NAME}
            >
              <MaterialIcon
                name={PRODUCT_REVIEW_RATING_PICKER_STAR_ICON}
                filled={star <= shownRating}
                className={`text-4xl ${star <= shownRating ? "text-accent" : "text-footer-border"}`}
              />
            </Button>
          ))}
        </div>

        <span
          className={`text-sm font-semibold lg:text-[14.5px] ${
            shownRating ? "text-foreground" : "text-muted-light"
          }`}
        >
          {PRODUCT_REVIEW_RATING_PICKER_WORDS[shownRating] ??
            PRODUCT_REVIEW_RATING_PICKER_PLACEHOLDER}
        </span>
      </div>

      {error && <span className="text-[12.5px] text-error-dark">{error}</span>}
    </div>
  );
};
