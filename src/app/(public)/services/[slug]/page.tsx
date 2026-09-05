import { services } from "@/libs/servicesData";
import BookingButton from "@/components/ui/buttons/BookingButton";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const service = services.find(
    (item) => slug.toString() === item.url.toString(),
  );

  if (!service) return notFound();

  return {
    title: service?.heading,
    description: service?.text,
    openGraph: {
      images: [service?.img],
    },
  };
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.url.toString() }));
}

export default async function page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = services.find(
    (item) => item.url.toString() === slug.toString(),
  );

  if (!service) return notFound();
  return (
    <section className="w-full pt-50">
      <div className="site-container">
        <div className="space-y-20">
          <div className="flex-col-center text-center gap-6">
            <h1 className="heading font-bold text-6xl tracking-tight">{service.heading}</h1>
            <p className="base-para w-full max-w-150">{service.text}</p>
            <BookingButton variant="black"/>
          </div>

          <div className="relative w-full h-180 rounded-2xl overflow-hidden">
            <Image
              src={service.img}
              alt={service.heading}
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
