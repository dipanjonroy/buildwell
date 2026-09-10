import BookingButton from "@/components/ui/buttons/BookingButton";
import Image from "next/image";

type SingleProjectIntroTypes = {
  title: string;
  text: string;
  img: string;
};

export default function index({ title, text, img }: SingleProjectIntroTypes) {
  return (
    <section className="w-full pt-35 lg:pt-44 2xl:pt-50">
      <div className="site-container">
        <div className="w-full space-y-10 lg:space-y-16 xl:space-y-20">
          {/* Heading - Text - Button */}
          <div className="w-full flex flex-col xl:flex-row xl:items-end lg:justify-between gap-4">
            <h1 className="w-full max-w-140 heading font-extrabold tracking-tight text-4xl lg:text-5xl 2xl:text-6xl">
              {title}
            </h1>

            <div className="w-full max-w-140 space-y-6 lg:space-y-4">
              <p className="base-para tracking-tight">{text}</p>
              <BookingButton variant="black" />
            </div>
          </div>

          {/* Image */}
          <div className="relative w-full h-100 lg:h-120 xl:h-150 rounded-2xl overflow-hidden">
            <Image
              src={img}
              alt={title}
              fill
              className="object-cover"
              loading="eager"
              sizes="100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
