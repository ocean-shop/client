import type {
  DeliveryCity,
  DeliveryPoint,
  NovaPoshtaWarehouseCategory,
} from "../types/delivery.types";

export const NOVA_POSHTA_API_URL = "https://api.novaposhta.ua/v2.0/json/";
export const NOVA_POSHTA_ADDRESS_MODEL = "AddressGeneral";
export const NOVA_POSHTA_SEARCH_SETTLEMENTS_METHOD = "searchSettlements";
export const NOVA_POSHTA_GET_WAREHOUSES_METHOD = "getWarehouses";
export const NOVA_POSHTA_POSTOMAT_TYPE_REF = "f9316480-5f2d-425d-bc2c-ac7cd29decf0";

/** Nova Poshta answers bursts with "Try again after 0.5 seconds" instead of an HTTP error. */
export const NOVA_POSHTA_RETRY_DELAY_MS = 600;
export const NOVA_POSHTA_RETRY_ATTEMPTS = 2;

export const NOVA_POSHTA_WAREHOUSE_TITLES: Record<NovaPoshtaWarehouseCategory, string> = {
  Branch: "Відділення",
  Postomat: "Поштомат",
  Store: "Пункт",
  DropOff: "Пункт",
};

export const NOVA_POSHTA_SCHEDULE_DAYS = [
  { key: "Monday", label: "Пн–Пт" },
  { key: "Saturday", label: "Сб" },
  { key: "Sunday", label: "Нд" },
] as const;

export const NOVA_POSHTA_WEIGHT_LABEL = (weight: string) => `до ${weight} кг`;

export const UKRPOSHTA_API_URL = "https://www.ukrposhta.ua/address-classifier-ws";
export const UKRPOSHTA_CITY_PATH = "get_city_by_region_id_and_district_id_and_city_ua";
export const UKRPOSHTA_POST_OFFICES_PATH = "get_postoffices_by_city_id";
export const UKRPOSHTA_ACTIVE_LOCK_CODE = "0";
export const UKRPOSHTA_POSTTERMINAL_FLAG = "1";
export const UKRPOSHTA_POINT_TITLE = (postIndex: string) => `Відділення ${postIndex}`;

export const DELIVERY_CITY_SEARCH_LIMIT = 8;
export const DELIVERY_POINTS_LIMIT = 50;
export const DELIVERY_SEARCH_TERM_MAX_LENGTH = 100;

export const DELIVERY_EMPTY_CITIES: DeliveryCity[] = [];
export const DELIVERY_EMPTY_POINTS: DeliveryPoint[] = [];

export const DELIVERY_REQUEST_REVALIDATE_SECONDS = 60 * 60;

/** Shown before the visitor types anything, so the most common choices are one click away. */
export const DELIVERY_POPULAR_CITIES: DeliveryCity[] = [
  {
    id: "8d5a980d-391c-11dd-90d9-001a92567626",
    name: "Київ",
    area: "Київська",
    district: "",
    region: "Київська обл.",
  },
  {
    id: "db5c88f5-391c-11dd-90d9-001a92567626",
    name: "Львів",
    area: "Львівська",
    district: "",
    region: "Львівська обл.",
  },
  {
    id: "db5c88d0-391c-11dd-90d9-001a92567626",
    name: "Одеса",
    area: "Одеська",
    district: "",
    region: "Одеська обл.",
  },
  {
    id: "db5c88e0-391c-11dd-90d9-001a92567626",
    name: "Харків",
    area: "Харківська",
    district: "",
    region: "Харківська обл.",
  },
  {
    id: "db5c88f0-391c-11dd-90d9-001a92567626",
    name: "Дніпро",
    area: "Дніпропетровська",
    district: "",
    region: "Дніпропетровська обл.",
  },
];
