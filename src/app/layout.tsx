import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import ModalLayout from "@/components/modals/ModalLayout";
import ToastContainer from "@/components/providers/toast/ToastContainer";
import AlertContainer from "@/components/providers/alert/AlertContainer";
import SmoothScroller from "@/components/providers/SmoothScroller";

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "600"],
});

const manropeFont = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600","700", "800"],
});

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
