import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  variant?: "white" | "black";
  className: string;
  sizes: string;
};

export default function Logo({ variant, className, sizes }: LogoProps) {
  const logoSrc =
    variant === "black"
      ? "/buildwell-logo-black.png"
      : "/buildwell-logo-white.png";

  return (
    <Link href="/" className={`relative inline-block ${className}`}>
      <Image
        src={logoSrc}
        alt="Build Well Logo"
        className="object-contain"
        loading="eager"
        sizes={sizes}
        fill
      />
    </Link>
  );
}
