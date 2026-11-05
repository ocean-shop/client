export type DeliveryCourierFieldsProps = {
  street: string;
  apartment: string;
  onStreetChange: (street: string) => void;
  onApartmentChange: (apartment: string) => void;
};
