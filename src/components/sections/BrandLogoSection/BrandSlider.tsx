import Image from "next/image";

const logos = [
  {
    url: "/homepage/b-logo-1.png",
    alt: "Brand Logo one",
  },
  {
    url: "/homepage/b-logo-2.png",
    alt: "Brand Logo two",
  },
  {
    url: "/homepage/b-logo-3.png",
    alt: "Brand Logo three",
  },
  {
    url: "/homepage/b-logo-4.png",
    alt: "Brand Logo four",
  },
];

export default function BrandSlider() {
  const repeatedLogos = [...logos, ...logos, ...logos,...logos];
  return (
    <div className="relative w-full overflow-hidden">
      <div className="w-max flex animate-marquee">
        <div className="flex">
          {
            repeatedLogos.map((logo,idx)=>(
              <div key={idx} className="w-44 h-14 relative mx-10">
                <Image
                  src={logo.url}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                  sizes="176px"
                />
              </div>
            ))
          }
        </div>
      </div>

      {/* Left fade */}
      <span className="absolute left-0 inset-y-0 w-[clamp(5rem,5vw,25rem)] bg-linear-to-r from-(--color-background) to-transparent pointer-events-none"/>

      {/* Right fade */}
      <span className="absolute right-0 inset-y-0 w-[clamp(5rem,5vw,25rem)] bg-linear-to-l from-(--color-background) to-transparent pointer-events-none"/>
    </div>
  );
}