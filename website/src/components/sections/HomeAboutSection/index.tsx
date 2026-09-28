import AboutIntro from "./AboutIntro";
import AboutImage from "./AboutImage";
import AboutStats from "./AboutStats";

export default function index() {
  return (
    <section className="section-padding helper-bg">
      <div className="site-container">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12 2xl:gap-14">
          <AboutIntro />
          <AboutImage />
          <div className="w-full md:col-span-2 xl:col-auto">
            <AboutStats />
          </div>
        </div>
      </div>
    </section>
  );
}
