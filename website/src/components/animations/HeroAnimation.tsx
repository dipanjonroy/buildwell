"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { usePathname } from "next/navigation";

export default function HeroAnimation({
  children,
}: {
  children: React.ReactNode;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const pathName = usePathname();

  useGSAP(
    () => {
      const container = contentRef.current;
      if (!container) return;

      const tl = gsap.timeline();

      // Background image
      const bgImg = container.querySelector(".hero-bg");
      if (bgImg) {
        tl.from(bgImg, {
          scale: 1.1,
          duration: 1,
          ease: "power2.out",
        });
      }

      // Hero badge
      const badge = container.querySelector(".hero-badge");
      if (badge) {
        tl.from(badge, {
          y: 80,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
      }

      // Hero CTA
      const cta = container.querySelector(".hero-cta");
      if (cta) {
        tl.from(
          cta,
          {
            y: 80,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.5",
        );
      }

      // Hero Brand Text
      const brandText = container.querySelector(".hero-brand-text");
      if (brandText) {
        tl.from(
          brandText,
          {
            y: 80,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.5",
        );
      }

      gsap.from(".hero-char", {
        y: 20,
        filter: "blur(10px)",
        opacity: 0,
        duration: 0.4,
        ease: "power3.out",
        stagger: 0.03,
      });
    },
    { scope: contentRef, dependencies: [pathName] },
  );
  return (
    <div ref={contentRef} className="w-full h-full pointer-event-none">
      {children}
    </div>
  );
}
