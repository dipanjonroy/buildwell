"use client";

import useClickOutsideClose from "@/hooks/useClickOutsideClose";
import { useAlertStore } from "@/store/AlertStore";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function AlertContainer() {
  const alertContainerRef = useRef<HTMLDivElement>(null);
  const { isAlertOpen, clearAlert } = useAlertStore();

  useGSAP(() => {
    const element = alertContainerRef.current;

    if (!element) return;

    gsap.killTweensOf(element);

    if (isAlertOpen) {
      gsap.set(element, { display: "block" });

      gsap.fromTo(
        element,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        },
      );
    } else {
      gsap.to(element, {
        opacity: 0,
        duration: 0.4,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(element, { display: "none" });
          clearAlert();
        },
      });
    }
  }, [isAlertOpen]);

  return (
    <div
      ref={alertContainerRef}
      style={{ display: "none" }}
      className="fixed inset-0 bg-black/80 z-100"
    >
      <div className="w-full h-full flex-center">
        <AlertItem />
      </div>
    </div>
  );
}

const AlertItem = () => {
  const alertRef = useRef<HTMLDivElement>(null);
  const { closeAlert, alertInfo } = useAlertStore();

  useClickOutsideClose(alertRef, closeAlert);

  return (
    <div ref={alertRef} className="white-bg p-8 rounded-lg">
      <div className="flex-col-center">
        <h3 className="heading font-bold text-xl text-center">
          {alertInfo?.heading}
        </h3>
        <p className="text-sm mt-4 text-center max-w-120">{alertInfo?.text}</p>
        <div className="flex-center gap-6 mt-6">
          {alertInfo?.type !== "success" && (
            <button
              onClick={closeAlert}
              className="px-5 py-1.5 text-base bg-gray-300 rounded-full white-black cursor-pointer"
            >
              Cancel
            </button>
          )}
          <button
            onClick={() => alertInfo?.submitFn()}
            className="px-5 py-1.5 text-base black-bg rounded-full white-text cursor-pointer"
          >
            {alertInfo?.submitBtnName}
          </button>
        </div>
      </div>
    </div>
  );
};
