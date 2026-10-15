export type DeliveryPaymentMethod = {
  icon: string;
  title: string;
  text: string;
};

export type DeliveryPaymentsProps = {
  methods: DeliveryPaymentMethod[];
};
