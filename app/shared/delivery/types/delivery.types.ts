/** Mirrors the backend's `shippingMethod` enum, so an order can carry it as is. */
export type DeliveryCarrier = "nova" | "ukr";

export type DeliveryMethod = "branch" | "postomat" | "courier";

/** Pick-up methods are the ones that need a branch or a parcel locker chosen. */
export type DeliveryPointMethod = Exclude<DeliveryMethod, "courier">;

/**
 * A settlement as Nova Poshta knows it. Its name, area and district are also how the matching
 * Ukrposhta city is looked up, since the two carriers share no identifiers.
 */
export type DeliveryCity = {
  /** Nova Poshta `DeliveryCity` ref, which its warehouse lookup expects. */
  id: string;
  name: string;
  area: string;
  district: string;
  /** Ready-to-show `district, area` line that tells same-named settlements apart. */
  region: string;
};

export type DeliveryPoint = {
  id: string;
  title: string;
  address: string;
  meta: string;
};

export type DeliveryPointsRequest = {
  carrier: DeliveryCarrier;
  method: DeliveryPointMethod;
  city: DeliveryCity;
  searchTerm: string;
};

export type NovaPoshtaResponse<T> = {
  success: boolean;
  data: T[];
  errors: string[];
};

export type NovaPoshtaSettlement = {
  MainDescription: string;
  Area: string;
  Region: string;
  DeliveryCity: string;
  ParentRegionCode: string;
  RegionTypesCode: string;
};

export type NovaPoshtaSettlementsData = {
  TotalCount: number;
  Addresses: NovaPoshtaSettlement[];
};

export type NovaPoshtaWarehouseCategory = "Branch" | "Postomat" | "Store" | "DropOff";

export type NovaPoshtaWarehouse = {
  Ref: string;
  Number: string;
  Description: string;
  ShortAddress: string;
  CategoryOfWarehouse: NovaPoshtaWarehouseCategory;
  PlaceMaxWeightAllowed: string;
  Schedule: Partial<Record<string, string>>;
};

/** Ukrposhta wraps every list this way, and collapses a one-item list into a bare object. */
export type UkrposhtaEntries<T> = {
  Entries?: { Entry?: T | T[] } | null;
};

export type UkrposhtaCity = {
  CITY_ID: string;
  CITY_UA: string;
  REGION_ID: string;
  REGION_UA: string;
  DISTRICT_ID: string;
  DISTRICT_UA: string;
  NEW_DISTRICT_UA: string | null;
};

export type UkrposhtaPostOffice = {
  ID: string;
  POSTINDEX: string;
  ADDRESS: string;
  TYPE_SHORT: string | null;
  LOCK_CODE: string;
  POSTTERMINAL?: string | null;
};
