import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.BASE_URL!),
  title: {
    default:
      "BuildWell Construction | Residential & Commercial Construction Services",
    template: "%s | BuildWell Construction",
  },
  description:
    "BuildWell Construction delivers high-quality residential and commercial construction, remodeling, renovations, and custom building solutions. We combine expert craftsmanship, transparent communication, and reliable project management to bring your vision to life.",
  openGraph: {
    images: "/homepage/homepage-hero-image.jpg",
  },
};

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
