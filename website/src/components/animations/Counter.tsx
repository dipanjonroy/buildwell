"use client"

import { useGSAP } from "@gsap/react";
import { gsap } from "@/libs/gsap";
import { useRef } from "react";

type CounterType = {
  end: number;
  duration: number;
  className?: string;
  suffix?: string;
};

export default function Counter({
  end,
  duration,
  className,
  suffix,
}: CounterType) {
  const elRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    if (!elRef.current) return;

    const counter = { value: 0 };

    gsap.to(counter, {
      value: end,
      duration,
      ease: "power2.out",
      onUpdate: () => {
        if (elRef.current) {
          elRef.current.textContent =
            Math.floor(counter.value) + (suffix ?? "");
        }
      },
      scrollTrigger: {
        trigger: elRef.current,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    });
  });

  return (
    <span ref={elRef} className={className}>
      0{suffix}
    </span>
  );
}
