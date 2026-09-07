"use client";

import { useEffect, useState } from "react";
import Logo from "../Logo";
import Mainmenu from "../menus/Mainmenu";
import Mainbutton from "../ui/buttons/Mainbutton";
import MobileMenuButton from "../ui/buttons/MobileMenuButton";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";
import { useNotFoundStore } from "@/store/NotFoundStore";

export default function Header() {
  const lenis = useLenis();
  const pathName = usePathname();

  const { isNotFound } = useNotFoundStore();

  const [showHeader, setShowHeader] = useState<boolean>(true);
  const [scrolledUp, setScrolledUp] = useState<boolean>(false);

  const isService = pathName.startsWith("/services/");

  useEffect(() => {
    const handleState = () => {
      setScrolledUp(false);
      setShowHeader(true);
    };

    handleState();
  }, [pathName]);

  useEffect(() => {
  if (!lenis) return;

  const heroSection = document.querySelector<HTMLElement>(".scroll-height");
  const heroHeight = heroSection?.offsetHeight ?? 0;

  let lastScroll = window.scrollY;

  const handleScroll = ({ scroll }: { scroll: number }) => {

    const currentScroll = scroll;
    const difference = currentScroll - lastScroll;

    if (Math.abs(difference) < 5) return;

    const scrollingDown = difference > 0;

    if (currentScroll <= heroHeight - 90) {
      setShowHeader(true);
      setScrolledUp(false);
    } else if (scrollingDown) {
      setShowHeader(false);
      setScrolledUp(false);
    } else {
      setShowHeader(true);
      setScrolledUp(true);
    }

    lastScroll = currentScroll;
  };

  lenis.on("scroll", handleScroll);

  return () => {
    lenis.off("scroll", handleScroll);
  };
}, [lenis, pathName, isService]);

  const isBack = scrolledUp || isService || isNotFound;

  return (
    <div
      className={`fixed top-0 w-full z-50 px-6 lg:px-20 transition-transform duration-600 ${showHeader ? "translate-y-0" : "-translate-y-50"} ${scrolledUp ? "white-bg transition-color duration-300" : ""}`}
    >
      <div className="flex-center-between">
        {/* Header Logo */}
        <Logo
          className="w-16 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20"
          sizes="(min-width:1024px) 80px, (min-width:768px) 72px, 64px"
          variant={isBack ? "black" : "white"}
        />

        {/* Header Navigation */}
        <div
          className={`hidden lg:block ${isBack ? "black-text" : "white-text"}`}
        >
          <Mainmenu />
        </div>

        {/* Contact Button */}
        <div className="hidden lg:block">
          <Mainbutton
            btnName="Contact"
            url="/contact"
            variant={isBack ? "black" : "white"}
          />
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden overflow-hidden">
          <MobileMenuButton />
        </div>
      </div>
    </div>
  );
}
