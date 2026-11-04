import type { LoginCodeStatus } from "@/app/(pages)/login/types/login.types";
import type { LoginCodeCellState } from "../types/login-code-cells.types";

/** The verdict on the code colours every cell; otherwise the caret sits on the first empty one. */
export const getLoginCodeCellStateHelper = (
  index: number,
  codeLength: number,
  status: LoginCodeStatus
): LoginCodeCellState => {
  if (status === "verified") return "verified";
  if (status === "invalid") return "invalid";
  if (index < codeLength) return "filled";

  return index === codeLength ? "active" : "empty";
};
