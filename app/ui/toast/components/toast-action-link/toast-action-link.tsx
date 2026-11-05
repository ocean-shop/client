import Link from "next/link";
import { TOAST_ACTION_LINK_CLASS_NAME } from "./constants/toast-action-link.constants";
import type { ToastActionLinkProps } from "./types/toast-action-link.types";

/** A link when the action has an `href`, otherwise a button; both look like underlined text. */
export const ToastActionLink = ({ action, colorClassName }: ToastActionLinkProps) => {
  const className = `${TOAST_ACTION_LINK_CLASS_NAME} ${colorClassName}`;

  if (action.href) {
    return (
      <Link href={action.href} onClick={action.onClick} className={className}>
        {action.label}
      </Link>
    );
  }

  return (
    <button type="button" onClick={action.onClick} className={className}>
      {action.label}
    </button>
  );
};
