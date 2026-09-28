import Mainbutton from "@/components/ui/buttons/Mainbutton";

export default function AboutCTA() {
  return (
    <div className="w-full md:max-w-[clamp(16rem,50vw,34rem)] xl:max-w-max white-bg p-8 rounded-xl">
      <div className="base-para space-y-8">
        <p>From residential homes to commercial spaces, we work closely with our clients to bring their vision to life—on time, on budget, and built to stand the test of time.</p>
        <Mainbutton
          variant="black"
          url="/about"
          btnName="Learn More"
        />
      </div>
    </div>
  );
}