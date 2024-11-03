import React, { useCallback, useEffect, useState } from "react";
import cn from "classnames";
import { twMerge } from "tailwind-merge";

export function useDotButton(emblaApi) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const onDotButtonClick = useCallback(
    (index) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onInit = useCallback((emblaApi) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
}

export const DotButton = ({ onClick, active }) => {
  return (
    <button type="button" onClick={onClick}>
      <div className="h-4">
        <div
          className={twMerge(
            cn("h-2.5 w-2.5 bg-white/70 rounded-full", {
              "scale-125 bg-white": active,
            })
          )}
        />
      </div>
    </button>
  );
};
