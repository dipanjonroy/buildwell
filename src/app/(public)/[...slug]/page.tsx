import { notFound } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.BASE_URL!),
  title: "404-Page not found",
};

export const dynamic = "force-static";

export default function CatchError() {
  return notFound();
}
