"use client";

import { gsap } from "@/libs/gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

interface HorizontalScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  distance?: string;
  stagger?: number;
  scrollPerCard?: number;
}

export default function HorizontalScrollAnimation({
  children,
  className,
  distance = "100vw",
  stagger = 4,
  scrollPerCard = 600,
}: HorizontalScrollAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1280px)", () => {
        const cardsContainer =
          containerRef.current!.querySelector(".card-container");

        if (!cardsContainer) return;

        const cards = gsap.utils.toArray<HTMLElement>(cardsContainer?.children);

        const scrollLength = cards.length * scrollPerCard;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 20%",
            end: `+=${scrollLength + 800}`,
            scrub: 0.8,
            pin: containerRef.current,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        tl.fromTo(
          cards,
          {
            x: distance,
          },
          {
            x: 0,
            ease: "none",
            stagger: stagger,
            duration: 5,
          },
        ).to({}, { duration: 2 });
      });

      return () => mm.revert();
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className={`w-full ${className}`}>
      {children}
    </div>
  );
}
