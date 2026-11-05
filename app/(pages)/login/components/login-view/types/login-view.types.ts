export type LoginViewProps = {
  /** Same-site path to open once the code is accepted. */
  redirectTo: string;
};

/** `failed` covers everything already reported in a toast: expired, blocked or unreachable. */
export type LoginCodeVerifyOutcome = "verified" | "invalid" | "failed";

export type UseLoginCodeParams = {
  login: string;
  onVerified: () => void;
};
