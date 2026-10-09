export type LoginIdentifierStepProps = {
  value: string;
  error: string | null;
  onChange: (value: string) => void;
  onSubmit: () => void;
};
