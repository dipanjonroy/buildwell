import Image from "next/image";
import CTAButton from "./CTAButton";

export default function index({className}:{className?:string}) {
  return (
    <section className={`${className} pb-[clamp(3.75rem,9vw,7.5rem)]`}>
      <div className="site-container">
        <div className="relative w-full h-120 xl:h-160 rounded-2xl overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/CTA-image.jpg"
              alt="Kitchen cabinet"
              fill
              sizes="100vw"
              className="object-cover"
            />
            {/* Black shadow */}
            <span className="absolute inset-0 bg-linear-to-t from-foreground/50 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative w-full h-full z-10 p-8 lg:p-14 xl:p-20">
            <div className="w-full h-full flex flex-col lg:flex-row lg:items-end justify-end lg:justify-between gap-6">
              <div className="w-full max-w-120 white-text">
                <h2 className="heading-two">
                  Let&apos;s Build Something Exceptional Together
                </h2>
                <p className="base-para mt-4">
                  Contact our team today for a free consultation and
                  personalized project estimate.
                </p>
              </div>

              <CTAButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
