import {
  LOGIN_CODE_LENGTH,
  LOGIN_NON_DIGIT_PATTERN,
} from "@/app/(pages)/login/constants/login.constants";
import { Input } from "@/app/ui/input/input";
import {
  LOGIN_CODE_CELL_CLASS_NAME,
  LOGIN_CODE_CELL_STATE_CLASS_NAMES,
  LOGIN_CODE_CELLS_INPUT_LABEL,
} from "./constants/login-code-cells.constants";
import type { LoginCodeCellState, LoginCodeCellsProps } from "./types/login-code-cells.types";

const CELL_INDEXES = Array.from({ length: LOGIN_CODE_LENGTH }, (_, index) => index);

export function LoginCodeCells({ code, status, onChange }: LoginCodeCellsProps) {
  function getCellState(index: number): LoginCodeCellState {
    if (status === "verified") return "verified";
    if (status === "invalid") return "invalid";
    if (index < code.length) return "filled";

    return index === code.length ? "active" : "empty";
  }

  return (
    <div className="relative">
      <div aria-hidden className="grid grid-cols-4 gap-2 lg:gap-2.5">
        {CELL_INDEXES.map((index) => (
          <div
            key={index}
            className={`${LOGIN_CODE_CELL_CLASS_NAME} ${LOGIN_CODE_CELL_STATE_CLASS_NAMES[getCellState(index)]}`}
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
}
