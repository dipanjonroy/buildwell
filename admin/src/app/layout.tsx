import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import ToastContainer from "@/providers/toast/ToastContainer";
import ModalLayout from "@/providers/modal/ModalLayout";


const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400","500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default:
      "BuildWell Construction",
    template: "%s | BuildWell Construction",
  },
  
};



export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${interFont.variable} antialiased`}
    >
      <body>
        {children}
        <ToastContainer/>
        <ModalLayout/>
      </body>
    </html>
  );
}
