import { getUserProfile } from "@/app/(pages)/cabinet/(pages)/profile/api/get-user-profile";
import { getCabinetGreetingNameHelper } from "@/app/(pages)/cabinet/helpers/get-cabinet-greeting-name";
import { PRODUCT_REVIEW_NAME_MAX_LENGTH } from "../constants/product-review.constants";

/**
 * The first name from the signed-in user's profile, used to sign their reviews. Server-only.
 * Returns `null` when the profile has no name or cannot be read, so the form asks for one.
 */
export const getProductReviewAuthorName = async (userId: string): Promise<string | null> => {
  try {
    const { fullName } = await getUserProfile(userId);

    return getCabinetGreetingNameHelper(fullName)?.slice(0, PRODUCT_REVIEW_NAME_MAX_LENGTH) ?? null;
  } catch {
    return null;
  }
};
