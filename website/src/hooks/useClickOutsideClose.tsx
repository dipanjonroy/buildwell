import { RefObject, useEffect } from "react";

export default function useClickOutsideClose<T extends HTMLDivElement>(
  ref: RefObject<T | null>,
  callBack: ()=>void,
) {
  useEffect(() => {
    const handleClickOutSide = (event: MouseEvent) => {
      if (ref?.current && !ref.current.contains(event.target as Node)) {
        callBack();
      }
    };

    document.addEventListener("mousedown", handleClickOutSide);

    return () => {
      document.addEventListener("mousedown", handleClickOutSide);
    };
  }, [ref, callBack]);
}
