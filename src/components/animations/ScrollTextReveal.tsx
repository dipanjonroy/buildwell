"use client";

import { gsap } from "@/libs/gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

type ScrollTextRevealProp = {
  text: string;
};

export default function ScrollTextReveal({ text }: ScrollTextRevealProp) {
  const contentRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const content = contentRef.current;
      if (!content) return;

      const chars = content.querySelectorAll(".char");

      gsap.fromTo(
        chars,
        {
          opacity: 0.3,
        },
        {
          opacity: 1,
          stagger: 1,
          ease: "none",
          scrollTrigger: {
            trigger: content,
            start: "top bottom",
            end: "top 20%",
            scrub: 1,
          },
        },
      );
    },
    { scope: contentRef },
  );

  return (
    <span ref={contentRef}>
      {text.split(" ").map((word, wordIdx) => (
        <span key={wordIdx} className="inline-block me-2.5">
          {word.split("").map((char, charIdx) => (
            <span key={charIdx} className="inline-block char">
              {char}
            </span>
          ))}
        </span>
      ))}
    </span>
  );
}
