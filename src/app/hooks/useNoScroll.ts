import { useEffect } from "react";

export const useNoScroll = (shouldDisable: boolean) => {
  useEffect(() => {
    if (shouldDisable) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [shouldDisable]);
};
