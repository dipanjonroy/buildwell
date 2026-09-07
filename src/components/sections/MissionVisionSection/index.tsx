"use client";

import { gsap } from "@/libs/gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";

const CARDS_DETAILS = [
  {
    title: "Our Mission",
    text: "To build quality homes that bring together thoughtful design, reliable craftsmanship, and lasting value. At BuildWell, we are committed to making every construction and remodeling project a smooth, transparent, and rewarding experience for our clients.",
    img:"/aboutpage/our-mission.jpg"
  },
  {
    title: "Our Vision",
    text: "To become a trusted name in residential construction by creating homes that stand the test of time. We envision a future where exceptional craftsmanship, modern design, and client-focused service come together to build better spaces and stronger communities.",
    img:"/aboutpage/our-vision.jpg"
  }
]

export default function MissionVision() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const image = imageRef.current;
      const cardsContainer = cardsRef.current;

      if (!section || !image || !cardsContainer) return;

      const cards = gsap.utils.toArray<HTMLElement>(".card");

      gsap.set(cards, { yPercent: 200 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=1800",
          scrub: 0.2,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Image blur
      tl.to(
        image,
        {
          filter: "blur(6px)",
          ease: "none",
          duration: 30,
        },
        0,
      );

      // Stack cards
      cards.forEach((card, i) => {
        
        tl.to(card, {
          yPercent: 0,
          duration: 30,
          ease: "none",
        });

        if (i > 0) {
          
          tl.to(
            cards[i - 1],
            {
              scale: 0.8,
              duration: 30,
              ease: "none",
            },
            "<",
          );
        }
      });

      // Final pause
      tl.to(
        {},
        {
          duration: 12,
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="relative w-full">
      <div className="relative w-full h-200 xl:h-300 overflow-hidden">
        {/* Image */}
        <div ref={imageRef} className="absolute inset-0">
          <Image
            src="/aboutpage/Mission-vision.jpg"
            alt="Mission vision section image"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* Cards */}
        <div ref={cardsRef} className="absolute inset-0 flex-center">
          <div className="relative w-[90%] max-w-200 h-145 lg:h-70">
            {
              CARDS_DETAILS.map((card,idx)=>(
                <div key={idx} className="card absolute inset-0 p-6 rounded-xl helper-bg">
                  <div className="w-full h-full flex flex-col lg:flex-row gap-6 lg:gap-10">
                    <div className="relative w-full lg:w-60 h-70 lg:h-full rounded-xl overflow-hidden">
                      <Image
                        src={card.img}
                        alt={`BuildWell-${card.title}`}
                        fill
                        sizes="240px"
                        className="object-cover"
                      />
                    </div>

                    <div className="lg:flex-1 space-y-2 flex flex-col justify-center">
                      <h3 className="heading font-bold text-3xl tracking-tight">{card.title}</h3>
                      <p className="tracking-tight">{card.text}</p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
}
