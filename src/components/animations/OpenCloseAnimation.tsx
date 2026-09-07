"use client";

import { useModalStore } from "@/store/ModalStore";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { RxCross1 } from "react-icons/rx";

type OpenCloseAnimationType = {
  children: React.ReactNode;
};

export default function OpenCloseAnimation({
  children,
}: OpenCloseAnimationType) {
  const elementRef = useRef<HTMLDivElement>(null);
  const { closeModal } = useModalStore();

  useGSAP(() => {
    const element = elementRef.current;

    if (!element) return;

    gsap.from(element, {
      scale: 0,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    });
  }, []);

  const closeModalAnimation = () => {
    const element = elementRef.current;

    if (!element) return;

    gsap.to(element, {
      scale: 0,
      opacity: 0,
      duration: 0.4,
      ease: "power2.in",
      onComplete: closeModal,
    });
  };

  return (
    <div ref={elementRef} className="md:mx-6 lg:mx-0 flex-center">
      <div className="relative w-full h-full p-8 white-bg rounded-xl">
        {/* Close Modal */}
        <button
          onClick={closeModalAnimation}
          className="absolute right-8 top-8 cursor-pointer z-100"
        >
          <RxCross1 className="black-text text-xl" />
        </button>
        {children}
      </div>
    </div>
  );
}
