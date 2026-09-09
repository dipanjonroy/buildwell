import { projectsData } from "@/libs/projectData";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import SingleProjectIntro from "@/components/sections/SingleProject/SingleProjectIntro";

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

  console.log(project);

  if (!project) return notFound();

  return (
    <>
      <SingleProjectIntro title={project.title} text={project.shortDesc} img={project.img}/>
    </>
  );
}
