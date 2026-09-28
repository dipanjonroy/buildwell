"use client";

import { type ToastProp, useToastStore } from "@/store/ToastStore";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { MdCheckCircle, MdError, MdWarning, MdClose } from "react-icons/md";

export default function ToastContainer() {
  const { toasts } = useToastStore();
  return (
    <div className="fixed top-2 right-2 z-100">
      {toasts.map((toast) => (
        <ToastItem
          key={toast.id}
          id={toast.id}
          type={toast.type}
          msg={toast.msg}
        />
      ))}
    </div>
  );
}

const ToastItem = ({ id, type, msg }: ToastProp) => {
  const { removeToast } = useToastStore();
  const toastRef = useRef<HTMLDivElement>(null);

  const bg =
    type === "success"
      ? "bg-green-100"
      : type === "error"
        ? "bg-red-100"
        : "bg-yellow-100";
  const border = `border-2 ${type === "success" ? "border-green-500" : type === "error" ? "border-red-500" : "border-yellow-500"}`;
  const color =
    type === "success"
      ? "text-green-500"
      : type === "error"
        ? "text-red-500"
        : "text-yellow-500";

  const closeToast = () => {
    gsap.to(toastRef.current, {
      x: "110%",
      opacity: 0,
      duration: 0.6,
      ease: "power2.in",
      onComplete: () => removeToast(id),
    });
  };

  useGSAP(() => {
    const element = toastRef.current;

    if (!element) return;

    gsap.fromTo(
      element,
      {
        x: "110%",
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
      },
    );

    const timeOut = setTimeout(() => {
      closeToast();
    }, 3000);

    return () => clearTimeout(timeOut);
  });

  return (
    <div
      ref={toastRef}
      className={`relative ${bg} ${border} px-4 py-4 rounded-lg w-80 mb-2`}
    >
      <div className="flex gap-4">
        <span className={`text-lg ${color}`}>
          {type === "success" ? (
            <MdCheckCircle />
          ) : type === "error" ? (
            <MdError />
          ) : (
            <MdWarning />
          )}
        </span>
        <div className="leading-4">
          <span className="block font-bold text-base heading leading-none capitalize">
            {type}
          </span>
          <span className="text-xs leading-none">{msg}</span>
        </div>
      </div>
      <button
        onClick={closeToast}
        className="absolute right-2 top-2 cursor-pointer"
      >
        <MdClose />
      </button>
    </div>
  );
};
