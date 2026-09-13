import Image from "next/image";
import ContactForm from "./ContactForm";

export default function index() {
  return (
    <section>
      <div className="site-container">
        <div className="w-full flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/2 h-120 lg:h-auto">
            <div className="w-full h-full relative rounded-2xl overflow-hidden">
              <Image
                src="/contactpage/contact-form-image.jpg"
                alt="Contractor sitting in project"
                fill
                sizes="(max-width:768px) 100vw, 50vw"
                className="object-cover"
                loading="eager"
              />
            </div>
          </div>
          <div className="flex-1">
            <ContactForm/>
          </div>
        </div>
      </div>
    </section>
  );
}