import Image from "next/image";

export default function AboutImage() {
  return (
    <div className="w-full">
      <div className="relative w-full h-full min-h-150 rounded-2xl overflow-hidden">
        <Image
          src="/homepage/about-us-img.jpg"
          alt="Worker with yellow hat working"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}
