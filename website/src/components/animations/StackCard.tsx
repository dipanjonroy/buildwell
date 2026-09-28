"use client";

import { gsap } from "@/libs/gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function StackCard({ children }: { children: React.ReactNode }) {
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!cardsRef.current) return;

    const cardsElement = cardsRef.current.querySelector(".cards");

    if (!cardsElement) return;

    const cards = gsap.utils.toArray<HTMLElement>(cardsElement?.children);

    cards.forEach((card, i) => {
      const isLast = i === cards.length - 1;
      gsap.to(card, {
        scale: isLast ? 1 : 0.8,
        ease:"none",
        scrollTrigger:{
          trigger:card,
          start: "top 10%",
          end:"bottom top",
          endTrigger:cardsRef.current,
          scrub:true,
          pin:card,
          pinSpacing:false,
          invalidateOnRefresh:true,
        }
      });
    });
  }, []);

  return (
    <div ref={cardsRef} className="w-full">
      {children}
    </div>
  );
}
