export type ButtonVariant =
  "primary" | "primary-inverse" | "outline" | "soft" | "ghost" | "text" | "unstyled";

export type ButtonSize = "sm" | "md" | "lg" | "icon" | "auto";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};
