/** One label-and-value pair of the read-only view. */
export type CabinetProfileInfoItem = {
  label: string;
  value: string;
};

export type CabinetProfileInfoProps = {
  items: CabinetProfileInfoItem[];
};
