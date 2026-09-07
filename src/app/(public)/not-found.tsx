"use client";

import Mainbutton from "@/components/ui/buttons/Mainbutton";
import { useNotFoundStore } from "@/store/NotFoundStore";
import Image from "next/image";
import { useEffect } from "react";

export default function NotFound() {
  const {setNotFound } = useNotFoundStore();

  useEffect(() => {
    setNotFound(true);

    return () => {
      setNotFound(false);
    };
  }, [setNotFound]);

  return (
    <div className="w-full lg:h-dvh py-25 lg:py-0">
      <div className="site-container h-full">
        <div className="w-full h-full flex-col-center">
          <div className="w-full flex flex-col-reverse lg:flex-row lg:items-center gap-12 xl:gap-20">
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <div className="relative w-full h-[clamp(20rem,35vw,40rem)] rounded-xl overflow-hidden bg-red-400">
                <Image
                  src="/404-not-found.jpg"
                  alt="Two contractors watching tall buildings"
                  fill
                  sizes="(max-width:768px) 100vw, 50vw"
                  loading="eager"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2">
              <div>
                <span className="text-7xl xl:text-9xl heading font-bold tracking-tighter">404</span>
                <h2 className="heading font-bold text-4xl xl:text-5xl mt-2 xl:mt-4">Page Not Found!</h2>
                <p className="w-full max-w-100 text-sm lg:text-base mt-3 mb-8">We&apos;re sorry, the page you requested could not be found. Please go back to the homepage.</p>
                <Mainbutton
                  btnName="Go Home"
                  variant="black"
                  url="/"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
