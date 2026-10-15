export type LoginIdentifierStepProps = {
  value: string;
  error: string | null;
  isRequesting: boolean;
  onChange: (value: string) => void;
  onSubmit: () => void;
};
