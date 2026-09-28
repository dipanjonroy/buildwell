"use client";

import Logo from "../Logo";
import { IoMdClose } from "react-icons/io";
import { menus } from "@/libs/menuitems";
import Link from "next/link";
import Mainbutton from "../ui/buttons/Mainbutton";
import { useModalStore } from "@/store/ModalStore";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function MobileMenuModal() {
  const menuModalRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);

  const { isModalOpen, modalId, closeModal } = useModalStore();

  useGSAP(() => {
    if (!menuModalRef.current) return;

    const tl = gsap.timeline({ paused: true });

    tl.fromTo(
      menuModalRef.current,
      {
        x: "100%",
        opacity: 0,
      },
      {
        x: "0%",
        opacity: 1,
        duration: 0.6,
        delay: 0.2,
        ease: "power3.inOut",
      },
    );

    if (menuRef.current) {
      const menus = gsap.utils.toArray(
        menuRef.current.children,
      ) as HTMLElement[];

      tl.from(
        menus,
        {
          y: 20,
          opacity: 0,
          duration: 0.6,
          stagger: 0.2,
        },
        "-=0.1",
      );
    }

    if (btnRef.current) {
      tl.from(
        btnRef.current,
        {
          y: 20,
          opacity: 0,
          duration: 0.6,
        },
        "-=0.3",
      );
    }

    if (isModalOpen && modalId === "mobileMenuModal") {
      tl.play();
    } else {
      tl.reverse();
    }
  }, [isModalOpen, modalId]);

  const handleCloseModal = () => {
    gsap.to(menuModalRef.current, {
      x: "100%",
      opacity: 0,
      duration: 0.6,
      ease: "power3.out",
      onComplete: () => closeModal(),
    });
  };

  return (
    <div
      ref={menuModalRef}
      className="fixed h-svh white-bg inset-0 px-6 pt-3 z-100"
    >
      <div className="w-full flex-col-center gap-20">
        <div className="w-full flex-center-between border-b border-gray-300 pb-4">
          <div onClick={handleCloseModal}>
            <Logo variant="black" className="w-16 h-16" sizes="64px" />
          </div>
          <button
            onClick={handleCloseModal}
            className="w-10 h-10 black-bg flex-center rounded cursor-pointer"
          >
            <IoMdClose className="white-text text-2xl" />
          </button>
        </div>

        {/* Menu */}
        <nav ref={menuRef} className="flex-col-center gap-8 ">
          {menus.map((menu, index) => (
            <Link href={menu.url} key={index} onClick={handleCloseModal}>
              {menu.item}
            </Link>
          ))}
        </nav>

        {/* Button */}
        <div ref={btnRef}>
          <Mainbutton btnName="Contact" url="/contact" variant="black" />
        </div>
      </div>
    </div>
  );
}
