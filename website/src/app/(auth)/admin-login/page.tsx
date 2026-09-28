import LoginForm from "@/components/LoginForm";
import Logo from "@/components/Logo";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata:Metadata = {
  title: "Admin Login"
}

export default function page() {
  return (
    <main className="w-full">
      <section className="w-full h-dvh">
        <div className="w-full h-full flex items-center md:gap-8">
          <div className="hidden md:block relative w-full h-full md:w-1/2 xl:w-[60%]">
            {/* Image */}
            <div className="w-full h-full relative bg-black">
              <Image 
                src="/Login-image.jpg"
                alt="Home renovation"
                fill
                className="object-cover"
                loading="eager"
                sizes="60vw"
              />

              <span className="absolute inset-x-0 bottom-0 h-200 bg-linear-to-t from-black to-transparent"/>
            </div>

            <div className="absolute inset-0 md:p-16 lg:p-20 xl:p-30 2xl:p-40">
              <div className="w-full h-full flex items-end">
                
                <div className="white-text">
                  <span className="block text-2xl xl:text-4xl tracking-tight mb-8">Hello!</span>
                  <h1 className="heading font-bold tracking-tight md:text-4xl lg:text-5xl xl:text-6xl">Welcome Back!</h1>
                  <p className="base-para tracking-tight mt-3">Sign in to your account to continue.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Login form */}
          <div className="flex-1 p-4 lg:p-8 md:pe-12 xl:pe-16">
            <div className="w-full">
              <Logo
                variant="black"
                className="w-20 h-20"
                sizes="80px"
              />

              <div className="space-y-10 mt-10 lg:mt-20">
                <span className="block font-bold text-3xl">Login</span>
                <LoginForm/>
                <Link href="/" className="font-semibold underline">Back to Homepage</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}