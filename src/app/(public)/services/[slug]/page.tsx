import { services } from "@/libs/servicesData";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import HeroSection from "@/components/sections/SingleService/SingleServiceHero";
import DetailsSection from "@/components/sections/SingleService/ServiceDetails";

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
    title: service?.title,
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
    <>
      <HeroSection
        title={service.title}
        text={service.text}
        img={service.img}
      />

      <DetailsSection
        overview={service.overview}
        quote={service.quote}
        points={service.points}
      />
    </>
  );
}
