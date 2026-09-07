import BookingButton from "@/components/ui/buttons/BookingButton";
import Image from "next/image";

type SingleServiceHeroProps = {
  title: string;
  text: string;
  img: string;
};

export default function index({ title, text, img }: SingleServiceHeroProps) {
  return (
    <section className="w-full pt-40 lg:pt-44 2xl:pt-50">
      <div className="site-container">
        <div className="space-y-16 lg:space-y-20">
          <div className="flex-col-center text-center gap-5 2xl:gap-6">
            <h1 className="heading font-extrabold text-4xl lg:text-5xl 2xl:text-6xl tracking-tight">
              {title}
            </h1>
            <p className="base-para w-full max-w-150">{text}</p>
            <BookingButton variant="black" />
          </div>

          <div className="relative w-full h-100 lg:h-120 2xl:h-150 rounded-2xl overflow-hidden">
            <Image
              src={img}
              alt={title}
              fill
              sizes="100vw"
              className="object-cover"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
