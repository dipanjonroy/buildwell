"use client";

import MobileMenuModal from "@/components/modals/MobileMenuModal";
import { useModalStore } from "@/store/ModalStore";

export default function MobileMenuButton() {
  const { openModal } = useModalStore();
  return (
    <button
      className="white-bg px-2 cursor-pointer rounded w-10 h-10 flex-center relative z-50"
      onClick={() => openModal("mobileMenuModal", <MobileMenuModal />, "right")}
    >
      <span className="flex flex-col gap-1">
        <span className="w-6 h-0.5 black-bg block" />
        <span className="w-6 h-0.5 black-bg block" />
        <span className="w-6 h-0.5 black-bg block" />
      </span>
    </button>
  );
}
