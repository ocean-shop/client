export type CheckboxProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "checked" | "onChange" | "type"
> & {
  checked: boolean;
  onChange?: (checked: boolean) => void;
  label?: React.ReactNode;
  count?: React.ReactNode;
  wrapperClassName?: string;
};
