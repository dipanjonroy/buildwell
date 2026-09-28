import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import ModalLayout from "@/components/modals/ModalLayout";
import ToastContainer from "@/components/providers/toast/ToastContainer";
import AlertContainer from "@/components/providers/alert/AlertContainer";
import SmoothScroller from "@/components/providers/SmoothScroller";
import { Metadata } from "next";

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400","500", "600", "700"],
});

const manropeFont = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${interFont.variable} ${manropeFont.variable} antialiased`}
    >
      <body>
        <SmoothScroller>{children}</SmoothScroller>

        <ModalLayout />
        <AlertContainer />
        <ToastContainer />
      </body>
    </html>
  );
}
