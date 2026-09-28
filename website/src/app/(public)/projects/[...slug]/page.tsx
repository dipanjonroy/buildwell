import { projectsData } from "@/libs/projectData";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import ProjectIntro from "@/components/sections/SingleProject/SingleProjectIntro";
import ProjectDetails from "@/components/sections/SingleProject/SingleProjectDetails";
import FeaturedProjects from "@/components/sections/SingleProject/FeaturedProjects";
import CtaSection from "@/components/sections/CTASection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const project = projectsData.find(
    (item) => item.slug.toString() === slug.toString(),
  );

  if (!project) {
    return {
      title: "Project not found",
      description: "The requested project could not be found.",
    };
  }

  return {
    title: project.title,
    description: project.shortDesc,
    openGraph: {
      title: project.title,
      description: project.shortDesc,
      images: [
        {
          url: project.img,
          alt: project.title,
        },
      ],
    },
  };
}

export default async function page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projectsData.find(
    (item) => item.slug.toString() === slug.toString(),
  );

  if (!project) return notFound();

  const featuredProjects = projectsData.filter((p)=>p.id !== project.id).slice(0,2);

  return (
    <>
      <ProjectIntro
        title={project.title}
        text={project.shortDesc}
        img={project.img}
      />
      <ProjectDetails project={project} />
      <FeaturedProjects projects={featuredProjects}/>
      <CtaSection className="pt-[clamp(3.75rem,9vw,7.5rem)]"/>
    </>
  );
}
