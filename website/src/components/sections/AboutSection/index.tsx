import ScrollTextReveal from "@/components/animations/ScrollTextReveal";
import Stat from "@/components/Stat";
import Image from "next/image";

export default function index() {
  const scrollText =
    "From planning to completion, we build quality homes with expert craftsmanship, thoughtful design, reliable materials, and a commitment to making every space feel truly yours.";

  return (
    <section className="section-padding">
      <div className="site-container">
        <div className="space-y-12 lg:space-y-18">
          <h2 className="heading font-bold text-3xl lg:text-4xl 2xl:text-5xl tracking-tight leading-tight">
            <ScrollTextReveal
              text={scrollText}
            />
          </h2>

          <div className="flex flex-col lg:flex-row justify-between gap-15">
            <div className="flex flex-col justify-between gap-10">
              <p className="w-full lg:max-w-110 xl:max-w-120 font-semibold text-lg leading-tight tracking-tight">
                We believe building a home is about more than walls and
                finishes—it&apos;s about creating a place where life happens.
                From thoughtful planning and quality craftsmanship to clear
                communication and reliable project management, we handle every
                detail with care. Our goal is simple: to build beautiful,
                lasting homes that reflect your vision, lifestyle, and the way
                you want to live.
              </p>

              <div className="grid grid-cols-4 gap-10">
                <Stat number={8} label="Years experience" suffix="+" />
                <Stat number={26} label="Projects completed" suffix="+" />
                <Stat number={16} label="Skilled Workers" />
                <Stat number={120} label="Client satisfaction" suffix="+" />
              </div>
            </div>

            <div className="relative w-full lg:max-w-110 xl:max-w-120 h-110 rounded-xl overflow-hidden">
              <Image
                src="/aboutpage/about-us-about.jpg"
                alt="Carpenter working in home construction site"
                fill
                sizes="(max-width:768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
