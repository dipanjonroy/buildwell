"use client";

import useClickOutsideClose from "@/hooks/useClickOutsideClose";
import { gsap } from "@/libs/gsap";
import { useGSAP } from "@gsap/react";
import { forwardRef, useImperativeHandle, useRef } from "react";

export type PopAnimRef = {
  close: () => void;
};

type PopAnimProps = {
  children: React.ReactNode;
  closeFn: () => void;
};

const PopupAnim = forwardRef<PopAnimRef, PopAnimProps>(function PopupAnim(
  { children, closeFn },
  ref,
) {
  const popupRef = useRef<HTMLDivElement>(null);

  const closePopup = () => {
    const element = popupRef.current;
    if (!element) return;

    gsap.to(element, {
      scale: 0,
      opacity: 0,
      duration: 0.4,
      ease: "power2.in",
      onComplete: closeFn,
    });
  };

  useGSAP(() => {
    const element = popupRef.current;
    if (!element) return;

    gsap.from(element, {
      scale: 0,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    });
  });

  useImperativeHandle(ref, () => ({
    close: closePopup,
  }));

  useClickOutsideClose(popupRef, closePopup);

  return (
    <div ref={popupRef} className="w-full h-full flex-center">
      {children}
    </div>
  );
});

export default PopupAnim;
