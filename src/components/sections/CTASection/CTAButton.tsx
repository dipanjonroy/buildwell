"use client"

import BookingModal from "@/components/modals/BookingModal";
import PrimaryButton from "@/components/ui/buttons/PrimaryButton";
import { useModalStore } from "@/store/ModalStore";

export default function CTAButton() {
  const { openModal } = useModalStore();
  return (
    <PrimaryButton
      btnName="Book Free Consultation"
      variant="white"
      onClick={() => openModal("booking-modal", <BookingModal />)}
    />
  );
}
