export type CabinetProfileBirthdayFieldProps = {
  label: string;
  /** `YYYY-MM-DD`, or `null` while not picked. */
  value: string | null;
  min: string;
  onChange: (value: string | null) => void;
  disabled?: boolean;
};
