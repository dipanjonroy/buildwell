import Image from "next/image";
import { FaStar } from "react-icons/fa";

type TestimonialCardProp = {
  name: string;
  location: string;
  review: string;
  img: string;
};

export default function TestimonialCard({
  details,
}: {
  details: TestimonialCardProp;
}) {
  return (
    <div className="w-80 lg:w-110 h-80 p-6 helper-bg rounded-xl border border-gray-300">
      <div className="relative w-full h-full">
        {/* Reviewerr info */}
        <div className="flex items-center gap-6">
          {/* Reviewer image */}
          <div className="relative w-17 h-17 rounded-full overflow-hidden">
            <Image
              src={details.img}
              alt={details.name}
              fill
              sizes="68px"
              className="object-cover"
            />
          </div>

          {/* Reviewer name location */}
          <div>
            <h3 className="heading font-bold text-xl">{details.name}</h3>
            <p className="text-xs lg:text-sm">{details.location}</p>
          </div>
        </div>

        {/* Review */}
        <p className="text-sm italic mt-5">{`"${details.review}"`}</p>

        {/* Stars */}
        <div className="absolute bottom-0 left-0 flex gap-1">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} className="text-amber-400" />
          ))}
        </div>
      </div>
    </div>
  );
}
