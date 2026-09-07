
import Link from "next/link";
import BookingButton from "../ui/buttons/BookingButton";

export default function Footer() {

  return (
    <footer className="black-bg section-padding">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 white-text mb-20">
          <div className="w-full max-w-120 flex flex-col justify-between gap-8">
            <h3 className="heading font-bold text-2xl leading-tight">
              Building and renovating homes throughout Las Vegas with precision,
              reliability, and exceptional craftsmanship.
            </h3>
            <BookingButton/>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-20">
            {/* Opening hours */}
            <div className="space-y-6 lg:space-y-8 text-sm lg:text-base">
              <h4 className="text-xl lg:text-2xl heading font-bold">Opening hours</h4>
              <div className="space-y-3">
                <span className="flex flex-col">
                  <span>Monday to Friday:</span>
                  <span>8:00am - 6:00pm</span>
                </span>

                <span className="flex flex-col">
                  <span>Saturday:</span>
                  <span>9:00am - 1:00pm (by appointment)</span>
                </span>

                <span className="flex flex-col">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </span>
              </div>
            </div>

            {/* Contact info */}
            <div className="space-y-6 lg:space-y-8 text-sm lg:text-base">
              <h4 className="text-2xl heading font-bold">Contact</h4>
              <div className="space-y-3">
                <span className="flex flex-col">
                  <span>1234 Street name</span>
                  <span>Las Vegas, US</span>
                </span>

                <span className="flex flex-col">
                  <span>+00123456789</span>
                  <span>hello@blakelyjdesign.com</span>
                </span>
              </div>
            </div>

            {/* Leagal links */}
            <div className="space-y-6 lg:space-y-8 text-sm lg:text-base">
              <h4 className="text-2xl heading font-bold">Legal</h4>
              <div className="space-y-4">
                <span className="flex flex-col">
                  <Link href="/">Privacy Policy</Link>
                  <Link href="/">Terms & Conditions</Link>
                </span>
              </div>
            </div>

            {/* Social */}
            <div className="space-y-6 lg:space-y-8 text-sm lg:text-base">
              <h4 className="text-2xl heading font-bold">Follow</h4>
              <div className="space-y-4">
                <span className="flex flex-col">
                  <Link href="/">Facebook</Link>
                  <Link href="/">Instagram</Link>
                  <Link href="/">Pinterest</Link>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="heading font-extrabold white-text whitespace-nowrap leading-tight text-[clamp(2.25rem,9vw,9.5rem)] text-center">BuildWell Const.</div>
      </div>
    </footer>
  );
}
