import type { ProductCardData } from "../../../ui/product-card/types/product-card.types";

export const POPULAR_GRID_TITLE = "Популярні товари";

export const POPULAR_GRID_PRODUCTS: ProductCardData[] = [
  {
    id: "wireless-headphones",
    image:
      "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Бездротові навушники Ocean Pulse",
    badge: { label: "−20%", tone: "sale" },
    rating: 4.8,
    reviews: 214,
    name: "Бездротові навушники Ocean Pulse",
    price: "1 899 ₴",
    oldPrice: "2 399 ₴",
    isFavorite: true,
    ctaLabel: "Додати в кошик",
  },
  {
    id: "smart-watch",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Смарт-годинник Ocean Fit 2",
    badge: { label: "Новинка", tone: "new" },
    rating: 4.6,
    reviews: 98,
    name: "Смарт-годинник Ocean Fit 2",
    price: "3 299 ₴",
    ctaLabel: "Додати в кошик",
  },
  {
    id: "running-shoes",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Кросівки Ocean Runner",
    badge: { label: "Хіт продажів", tone: "bestseller" },
    rating: 4.9,
    reviews: 356,
    name: "Кросівки Ocean Runner",
    price: "2 149 ₴",
    isInCart: true,
    ctaLabel: "У кошику",
  },
  {
    id: "velvet-blanket",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Плед велюровий Ocean Home",
    badge: { label: "−25%", tone: "sale" },
    rating: 4.7,
    reviews: 121,
    name: "Плед велюровий Ocean Home",
    price: "749 ₴",
    oldPrice: "999 ₴",
    ctaLabel: "Додати в кошик",
  },
  {
    id: "beauty-set",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Набір косметики Ocean Glow",
    rating: 4.7,
    reviews: 142,
    name: "Набір косметики Ocean Glow",
    price: "899 ₴",
    ctaLabel: "Додати в кошик",
  },
  {
    id: "city-backpack",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Рюкзак міський Ocean Trip",
    rating: 4.5,
    reviews: 76,
    name: "Рюкзак міський Ocean Trip",
    price: "1 299 ₴",
    isFavorite: true,
    ctaLabel: "Додати в кошик",
  },
  {
    id: "portable-speaker",
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Портативна колонка Ocean Sound",
    badge: { label: "Новинка", tone: "new" },
    rating: 4.4,
    reviews: 58,
    name: "Портативна колонка Ocean Sound",
    price: "1 599 ₴",
    ctaLabel: "Додати в кошик",
  },
  {
    id: "scented-candle",
    image:
      "https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Ароматична свічка Ocean Calm",
    rating: 4.9,
    reviews: 203,
    name: "Ароматична свічка Ocean Calm",
    price: "429 ₴",
    ctaLabel: "Додати в кошик",
  },
];
