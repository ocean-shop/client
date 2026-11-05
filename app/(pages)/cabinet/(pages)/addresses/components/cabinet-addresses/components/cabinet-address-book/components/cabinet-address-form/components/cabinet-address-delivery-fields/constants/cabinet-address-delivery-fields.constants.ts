export const CABINET_ADDRESS_DELIVERY_FIELDS_COURIER = {
  street: {
    label: "Вулиця, будинок",
    placeholder: "вул. Зелена, 147",
    autoComplete: "address-line1",
  },
  apartment: {
    label: "Квартира, під’їзд, поверх",
    placeholder: "кв. 14, під’їзд 2",
    autoComplete: "address-line2",
  },
};

/** Leaves room in the saved line for the carrier and city around the street. */
export const CABINET_ADDRESS_DELIVERY_FIELDS_STREET_MAX_LENGTH = 120;
