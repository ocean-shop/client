"use client";

import { useEffect, useRef, useState } from "react";
import { PRODUCT_RELATED_CAROUSEL_INITIAL_POSITION } from "../constants/product-related-carousel.constants";
import { readProductRelatedCarouselPositionHelper } from "../helpers/read-product-related-carousel-position";

/**
 * Tracks the carousel's scroll position in whole cards and scrolls it card by card. The track
 * scrolls natively, so swipes and trackpads keep working and the arrows only follow along.
 */
export const useProductRelatedCarousel = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(PRODUCT_RELATED_CAROUSEL_INITIAL_POSITION);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const updatePosition = () => setPosition(readProductRelatedCarouselPositionHelper(track));
    // The observer also fires once on `observe`, which takes the first measurement.
    const resizeObserver = new ResizeObserver(updatePosition);

    resizeObserver.observe(track);
    track.addEventListener("scroll", updatePosition, { passive: true });

    return () => {
      resizeObserver.disconnect();
      track.removeEventListener("scroll", updatePosition);
    };
  }, []);

  const scrollToIndex = (index: number) => {
    const track = trackRef.current;
    if (!track) return;

    const { maxIndex, step } = readProductRelatedCarouselPositionHelper(track);
    const nextIndex = Math.min(Math.max(index, 0), maxIndex);

    track.scrollTo({ left: nextIndex * step, behavior: "smooth" });
  };

  return {
    trackRef,
    index: position.index,
    maxIndex: position.maxIndex,
    scrollToPrevious: () => scrollToIndex(position.index - 1),
    scrollToNext: () => scrollToIndex(position.index + 1),
  };
};
