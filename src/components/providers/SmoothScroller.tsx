"use client";

import { useModalStore } from "@/store/ModalStore";
import ReactLenis, { useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const LenisScrollReset = () => {
  const lenis = useLenis();
  const path = usePathname();

  const { isModalOpen } = useModalStore();

  useEffect(() => {
    if (!lenis) return;

    lenis.scrollTo(0, { immediate: true });
  }, [lenis,path]);

  useEffect(() => {
    if (isModalOpen) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [lenis, isModalOpen]);

  return null;
};

export default function SmoothScroller({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactLenis root options={{ lerp: 0.04 }}>
      <LenisScrollReset />
      {children}
    </ReactLenis>
  );
}
