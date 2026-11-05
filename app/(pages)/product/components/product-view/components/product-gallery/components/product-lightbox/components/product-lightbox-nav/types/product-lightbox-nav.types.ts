export type ProductLightboxNavButton = {
  icon: string;
  label: string;
  step: number;
  positionClassName: string;
};

export type ProductLightboxNavProps = {
  onStep: (step: number) => void;
};
