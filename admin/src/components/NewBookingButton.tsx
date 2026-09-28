"use client";

import { FiPlus } from "react-icons/fi";
import Button from "./Button";
import NewBookingModal from "./modals/NewBookingModal";
import { useModalStore } from "@/store/ModalStore";

export default function NewBookingButton() {
  const { openModal } = useModalStore();
  return (
    <Button
      name="New Booking"
      type="button"
      icon={FiPlus}
      onClick={() => openModal("new-booking", <NewBookingModal />)}
      className="black-bg white-text px-4 py-2"
    />
  );
}
