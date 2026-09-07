"use client";

import BookingModal from "@/components/modals/BookingModal";
import PrimaryButton from "@/components/ui/buttons/PrimaryButton";
import { useModalStore } from "@/store/ModalStore";

export default function BookingButton({variant}:{variant?:string}) {
  const {openModal} = useModalStore();
  return (
    <PrimaryButton
      btnName="Book Free Consultation"
      variant={variant}
      onClick={()=>openModal("booking-modal",<BookingModal/>)}
    />
  );
}
