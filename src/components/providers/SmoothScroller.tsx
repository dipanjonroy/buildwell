"use client";

import { useAlertStore } from "@/store/AlertStore";
import { useModalStore } from "@/store/ModalStore";
import ReactLenis, { useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const LenisScrollReset = () => {
  const lenis = useLenis();
  const path = usePathname();

  const { isModalOpen } = useModalStore();
  const { isAlertOpen } = useAlertStore();

  useEffect(() => {
    if (!lenis) return;

    lenis.scrollTo(0, { immediate: true });
  }, [lenis,path]);

  useEffect(() => {
    if (isModalOpen || isAlertOpen) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [lenis, isModalOpen,isAlertOpen]);

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
