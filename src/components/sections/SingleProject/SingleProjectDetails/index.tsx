import ProjectInfo from "./ProjectInfo";

export default function index() {
  return (
    <section className="section-padding">
      <div className="site-container">
        <div className="flex gap-10">
          <div className="w-100 sticky top-20">
            <ProjectInfo/>
          </div>
          <div className="flex-1">Content Area</div>
        </div>
      </div>
    </section>
  );
}