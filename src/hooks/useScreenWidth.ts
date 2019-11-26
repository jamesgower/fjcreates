import { useEffect, useState } from "react";

export function useScreenWidth(targetWidth: number): boolean {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect((): (() => void) => {
    const handler = (e: Event): void => {
      setWidth((e.target as Window).innerWidth);
    };

    window.addEventListener("resize", handler);

    return (): void => {
      window.removeEventListener("resize", handler);
    };
  });

  return width > targetWidth;
}
