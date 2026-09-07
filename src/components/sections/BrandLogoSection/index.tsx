import BrandSlider from "./BrandSlider";

export default function index() {
  return (
    <section className="section-padding">
      <div className="site-container">
        <div className="w-full flex-col-center gap-[clamp(2.5rem,3vw,10rem)]">
          <h2 className="heading text-center text-[clamp(1.5rem,4vw,3rem)] font-bold">
            Brands We Work With
          </h2>
          <div className="w-full overflow-hidden">
            <BrandSlider />
          </div>
        </div>
      </div>
    </section>
  );
}
