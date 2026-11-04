import {
  LOGIN_CODE_LENGTH,
  LOGIN_NON_DIGIT_PATTERN,
} from "@/app/(pages)/login/constants/login.constants";
import { Input } from "@/app/ui/input/input";
import {
  LOGIN_CODE_CELL_CLASS_NAME,
  LOGIN_CODE_CELL_INDEXES,
  LOGIN_CODE_CELL_STATE_CLASS_NAMES,
  LOGIN_CODE_CELLS_INPUT_LABEL,
} from "./constants/login-code-cells.constants";
import { getLoginCodeCellStateHelper } from "./helpers/get-login-code-cell-state";
import type { LoginCodeCellsProps } from "./types/login-code-cells.types";

export const LoginCodeCells = ({ code, status, onChange }: LoginCodeCellsProps) => {
  return (
    <div className="relative">
      <div aria-hidden className="grid grid-cols-4 gap-2 lg:gap-2.5">
        {LOGIN_CODE_CELL_INDEXES.map((index) => (
          <div
            key={index}
            className={`${LOGIN_CODE_CELL_CLASS_NAME} ${LOGIN_CODE_CELL_STATE_CLASS_NAMES[getLoginCodeCellStateHelper(index, code.length, status)]}`}
          >
            {code[index] ?? ""}
          </div>
        ))}
      </div>

      {/* One transparent input over the cells keeps paste and SMS autofill working. */}
      <Input
        variant="ghost"
        size="auto"
        value={code}
        onChange={(event) =>
          onChange(
            event.target.value.replace(LOGIN_NON_DIGIT_PATTERN, "").slice(0, LOGIN_CODE_LENGTH)
          )
        }
        inputMode="numeric"
        maxLength={LOGIN_CODE_LENGTH}
        autoComplete="one-time-code"
        autoFocus
        disabled={status === "verified"}
        aria-label={LOGIN_CODE_CELLS_INPUT_LABEL}
        className="absolute inset-0 h-full cursor-text text-base opacity-0"
      />
    </div>
  );
};
