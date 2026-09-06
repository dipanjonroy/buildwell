import HeroAnimation from "@/components/animations/HeroAnimation";
import Image from "next/image";

type HeroSectionTypes = {
  img: string;
  badge: string;
  headline: string;
  text: string;
};

export default function index({
  img,
  badge,
  headline,
  text,
}: HeroSectionTypes) {
  return (
    <section className="scroll-height w-full h-dvh 2xl:h-200 overflow-hidden">
      <HeroAnimation>
        <div className="relative w-full h-full flex items-end pb-10">
          {/* Background */}
          <div className="absolute inset-0">
            <div className="relative w-full h-full">
              <Image
                src={img}
                alt="hero image"
                fill
                sizes="100vw"
                className="object-cover hero-bg"
                loading="eager"
              />
            </div>

            <span className="absolute inset-x-0 bottom-0 h-100 bg-linear-to-t from-black/60 to-transparent" />
            <span className="absolute inset-x-0 top-0 h-50 bg-linear-to-b from-black/70 to-transparent" />
          </div>

          {/* content */}
          <div className="relative site-container z-100">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 white-text">
              <div className="w-full max-w-130">
                <span className="hero-badge block mb-8"> {`[${badge}]`}</span>
                <h1 className="heading font-bold text-4xl lg:text-5xl tracking-tight leading-10 lg:leading-12 xl:leading-tight">
                  {headline.split(" ").map((word, wordIdx) => (
                    <span
                      key={wordIdx}
                      className="inline-block whitespace-nowrap"
                    >
                      {word.split("").map((char, charIdx) => (
                        <span key={charIdx} className="hero-char inline-block">
                          {char}
                        </span>
                      ))}
                      {"\u00A0"}
                    </span>
                  ))}
                </h1>
              </div>

              <p className="hero-brand-text w-full max-w-130 lg:text-right text-sm lg:text-base">
                {text}
              </p>
            </div>
          </div>
        </div>
      </HeroAnimation>
    </section>
  );
}
