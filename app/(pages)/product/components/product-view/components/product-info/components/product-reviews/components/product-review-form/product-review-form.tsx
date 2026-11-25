import { findProductVariationHelper } from "@/app/shared/products/helpers/find-product-variation";
import { Button } from "@/app/ui/button/button";
import { FORM_FIELD_INVALID_CLASS_NAME } from "@/app/ui/form-field/constants/form-field.constants";
import { FormField } from "@/app/ui/form-field/form-field";
import { FormInput } from "@/app/ui/form-input/form-input";
import { MaterialIcon } from "@/app/ui/material-icon/material-icon";
import { ProductThumbnail } from "@/app/ui/product-thumbnail/product-thumbnail";
import { Textarea } from "@/app/ui/textarea/textarea";
import { PRODUCT_REVIEW_COMMENT_MAX_LENGTH } from "@/app/(pages)/product/constants/product-review.constants";
import { ProductReviewRatingPicker } from "./components/product-review-rating-picker/product-review-rating-picker";
import {
  PRODUCT_REVIEW_FORM_BACK_ICON,
  PRODUCT_REVIEW_FORM_BACK_LABEL,
  PRODUCT_REVIEW_FORM_CANCEL_CLASS_NAME,
  PRODUCT_REVIEW_FORM_CANCEL_LABEL,
  PRODUCT_REVIEW_FORM_COMMENT_COUNTER,
  PRODUCT_REVIEW_FORM_COMMENT_HINT,
  PRODUCT_REVIEW_FORM_COMMENT_LABEL,
  PRODUCT_REVIEW_FORM_COMMENT_NAME,
  PRODUCT_REVIEW_FORM_COMMENT_PLACEHOLDER,
  PRODUCT_REVIEW_FORM_DETAIL_FIELDS,
  PRODUCT_REVIEW_FORM_NAME_FIELD,
  PRODUCT_REVIEW_FORM_NOTICE,
  PRODUCT_REVIEW_FORM_NOTICE_CLASS_NAME,
  PRODUCT_REVIEW_FORM_NOTICE_ICON,
  PRODUCT_REVIEW_FORM_PRODUCT_PREFIX,
  PRODUCT_REVIEW_FORM_SUBMIT_CLASS_NAME,
  PRODUCT_REVIEW_FORM_SUBMIT_ICON,
  PRODUCT_REVIEW_FORM_SUBMIT_LABEL,
  PRODUCT_REVIEW_FORM_TEXTAREA_CLASS_NAME,
  PRODUCT_REVIEW_FORM_THUMBNAIL_CLASS_NAME,
  PRODUCT_REVIEW_FORM_THUMBNAIL_SIZES,
} from "./constants/product-review-form.constants";
import { useProductReviewForm } from "./hooks/use-product-review-form";
import type { ProductReviewFormProps } from "./types/product-review-form.types";

/** New review of the product: a rating, the author's name, pros and cons, and a comment. */
export const ProductReviewForm = ({ product, offer, onCancel, onSent }: ProductReviewFormProps) => {
  const {
    rating,
    commentLength,
    errors,
    isSending,
    clearError,
    changeRating,
    handleCommentChange,
    handleSubmit,
  } = useProductReviewForm(product.id, onSent);

  const variation = findProductVariationHelper(product.variations, offer.id);
  const variationLabel = variation?.title ?? variation?.name;

  return (
    <div className="flex flex-col gap-4 lg:gap-[18px]">
      <Button
        variant="text"
        size="auto"
        onClick={onCancel}
        disabled={isSending}
        className="min-h-8 w-fit gap-1.5 text-[13.5px]"
      >
        <MaterialIcon name={PRODUCT_REVIEW_FORM_BACK_ICON} className="text-lg" />
        {PRODUCT_REVIEW_FORM_BACK_LABEL}
      </Button>

      <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-4 lg:gap-[18px]">
        <div className="flex items-center gap-2.5 rounded-xl bg-surface-soft p-2.5 lg:gap-3 lg:p-3">
          <ProductThumbnail
            image={offer.images[0]?.url}
            sizes={PRODUCT_REVIEW_FORM_THUMBNAIL_SIZES}
            className={PRODUCT_REVIEW_FORM_THUMBNAIL_CLASS_NAME}
          />
          <div className="flex min-w-0 flex-col gap-0.5">
            <span className="break-words text-[13px] font-semibold leading-[1.35] text-foreground lg:text-sm">
              <span className="hidden lg:inline">{PRODUCT_REVIEW_FORM_PRODUCT_PREFIX} </span>
              {product.name}
            </span>
            {variationLabel && (
              <span className="text-xs text-muted-light lg:text-[12.5px]">{variationLabel}</span>
            )}
          </div>
        </div>

        <ProductReviewRatingPicker
          value={rating}
          error={errors.rating}
          disabled={isSending}
          onChange={changeRating}
        />

        <FormInput
          {...PRODUCT_REVIEW_FORM_NAME_FIELD}
          error={errors.name}
          disabled={isSending}
          onChange={() => clearError("name")}
        />

        <div className="grid gap-4 lg:grid-cols-2 lg:gap-3">
          {PRODUCT_REVIEW_FORM_DETAIL_FIELDS.map((field) => (
            <FormInput
              key={field.name}
              {...field}
              error={errors[field.name]}
              disabled={isSending}
              onChange={() => clearError(field.name)}
            />
          ))}
        </div>

        <FormField label={PRODUCT_REVIEW_FORM_COMMENT_LABEL} error={errors.comment}>
          <Textarea
            name={PRODUCT_REVIEW_FORM_COMMENT_NAME}
            placeholder={PRODUCT_REVIEW_FORM_COMMENT_PLACEHOLDER}
            maxLength={PRODUCT_REVIEW_COMMENT_MAX_LENGTH}
            disabled={isSending}
            aria-invalid={errors.comment ? true : undefined}
            onChange={handleCommentChange}
            className={`${PRODUCT_REVIEW_FORM_TEXTAREA_CLASS_NAME} ${
              errors.comment ? FORM_FIELD_INVALID_CLASS_NAME : ""
            }`}
          />
          <span className="flex justify-between gap-3 text-xs text-muted-light lg:text-[12.5px]">
            <span>{PRODUCT_REVIEW_FORM_COMMENT_HINT}</span>
            <span>{PRODUCT_REVIEW_FORM_COMMENT_COUNTER(commentLength)}</span>
          </span>
        </FormField>

        <p className={PRODUCT_REVIEW_FORM_NOTICE_CLASS_NAME}>
          <MaterialIcon
            name={PRODUCT_REVIEW_FORM_NOTICE_ICON}
            className="text-lg text-accent lg:text-[19px]"
          />
          {PRODUCT_REVIEW_FORM_NOTICE}
        </p>

        <div className="flex flex-col gap-2.5 lg:flex-row lg:gap-3">
          <Button
            type="submit"
            size="auto"
            disabled={isSending}
            className={PRODUCT_REVIEW_FORM_SUBMIT_CLASS_NAME}
          >
            <MaterialIcon name={PRODUCT_REVIEW_FORM_SUBMIT_ICON} className="text-[19px]" />
            {PRODUCT_REVIEW_FORM_SUBMIT_LABEL}
          </Button>
          <Button
            variant="outline"
            size="auto"
            onClick={onCancel}
            disabled={isSending}
            className={PRODUCT_REVIEW_FORM_CANCEL_CLASS_NAME}
          >
            {PRODUCT_REVIEW_FORM_CANCEL_LABEL}
          </Button>
        </div>
      </form>
    </div>
  );
};
