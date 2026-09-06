import Image from "next/image";
import HeroAnimation from "@/components/animations/HeroAnimation";
import BookingButton from "../../../ui/buttons/BookingButton";

export default function index() {
  const heroHeading =
    "Building Quality Homes & Commercial Spaces You Can Trust";
  return (
    <div className="scroll-height w-full min-h-svh relative overflow-hidden">
      <HeroAnimation>
        {/* Background */}
        <div className="absolute w-full h-full">
          <div className="relative w-full h-full">
            <Image
              src="/homepage/homepage-hero-image.jpg"
              alt="Construction undergoing"
              fill
              sizes="100vw"
              className="hero-bg object-cover object-center"
            />
          </div>

          <span className="absolute inset-0 bg-linear-to-t from-black to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-svh">
          <div className="site-container relative h-full">
            {/* Main Content - Center */}
            <div className="absolute inset-0 flex items-center">
              <div className="space-y-6 lg:space-y-8">
                {/* Eyebrow */}
                <span className="hero-badge inline-block rounded-full border white-border bg-white/10 px-4 py-2 backdrop-blur-md white-text tracking-wide text-xs lg:text-sm">
                  Proudly serving in Las Vegas
                </span>

                {/* Heading */}
                <h1 className="heading hero-heading font-extrabold white-text leading-[1.05] text-[clamp(2.25rem,3.5vw,4.5rem)] w-full max-w-150 xl:max-w-250">
                  {heroHeading.split(" ").map((word, wordIndex) => (
                    <span
                      key={wordIndex}
                      className="inline-block whitespace-nowrap"
                    >
                      {word.split("").map((char, charIndex) => (
                        <span
                          key={charIndex}
                          className="hero-char inline-block"
                        >
                          {char}
                        </span>
                      ))}

                      {"\u00A0"}
                    </span>
                  ))}
                </h1>

                {/* CTA */}
                <div className="hero-cta">
                  <BookingButton />
                </div>
              </div>
            </div>

            {/* Brand Text - Bottom */}
            <div className="hero-brand-text absolute bottom-0 left-0 w-full overflow-hidden pb-6 lg:pb-1">
              <span className="block w-full heading font-extrabold white-text whitespace-nowrap leading-tight text-[clamp(2.25rem,9vw,9.5rem)] text-center">
                BuildWell Const.
              </span>
            </div>
          </div>
        </div>
      </HeroAnimation>
    </div>
  );
}
