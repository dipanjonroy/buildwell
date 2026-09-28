import SectionHeading from "@/components/ui/SectionHeading";
import ContactMethodsGrid from "./ContactMethodsGrid";

export default function index() {
  return (
    <section className="section-padding">
      <div className="site-container">
        <div className="flex-col-center">
          <SectionHeading heading="Three easy ways to reach us." />
          <p className="base-para tracking-tight w-full max-w-140 text-center mt-5 mb-12">
            Drop by, shoot us a message, or pick up the phone. However you reach
            out, you&apos;ll be talking to a real Roofex specialist — not a call
            center.
          </p>
          <div className="w-full max-w-300 mx-auto">
            <ContactMethodsGrid/>
          </div>
        </div>
      </div>
    </section>
  );
}
