"use client";

import dynamic from "next/dynamic";

const Maparea = dynamic(
  () => import("@/components/sections/ContactMap/Maparea"),
  {
    ssr: false,
  }
);

export default function index() {

  return (
    <section className="section-padding">
      <div className="w-full h-120 xl:h-160">
        <Maparea/>
      </div>
    </section>
  );
}
