import React from "react";
import Image from "next/image";
import { projects } from "@/data/projects";
import CTASection from "@/components/home/CTASection";
import { client } from "@/lib/sanity";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

export const metadata = {
  title: "Our Portfolio | Pure Tech Zone",
  description:
    "Explore the successful web and e-commerce projects completed by Pure Tech Zone. Top web designer in Baghpat.",
};

export default async function PortfolioPage() {
  const projectData = await client.fetch(`*[_type == "ProjectsSchema"]`);

  console.log(projectData, " test-data");
  return (
    <>
      <section className="relative py-15 md:py-20 bg-gray-50 dark:bg-[#0c121e] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 font-heading">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Portfolio
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Hamare kuch best projects dekhiye jo humne modern design, fast speed
            aur strong performance ko dhyan me rakhkar banaye hain.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-[#0a0a0a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* {projects.map((project) => (
              <div
                key={project.id}
                className="relative group rounded-2xl overflow-hidden shadow-lg h-[600px]"
              >
   
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>


                <div
                  className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-60 mix-blend-multiply group-hover:opacity-80 transition-opacity duration-300`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

     
                <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-bold uppercase tracking-wider mb-3 w-fit">
                    {project.category}
                  </span>
                  <h4 className="text-2xl font-bold text-white mb-2 font-heading">
                    {project.title}
                  </h4>
                  <p className="text-gray-200 text-sm mb-4 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs text-white/80 bg-black/40 backdrop-blur-sm px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))} */}

            {projectData?.map((project) => {
              const imageUrl = project?.mainImage?.asset
                ? urlFor(project.mainImage).url()
                : project?.image;
              const themeColor = project?.themeColor || project?.color || "";
              const tagsList = project?.tags?.slice(0, 3) || [];

              return (
                <div
                  key={project._id || project.id}
                  className="relative group rounded-2xl overflow-hidden shadow-lg h-[800px]"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 w-full h-full">
                    <Image
                      src={imageUrl}
                      alt={project.title || "Project Image"}
                      fill
                      sizes="(max-width: 740px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${themeColor} opacity-60 mix-blend-multiply group-hover:opacity-80 transition-opacity duration-300`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                  {/* Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-bold uppercase tracking-wider mb-3 w-fit">
                      {project.category}
                    </span>
                    <h4 className="text-2xl font-bold text-white mb-2 font-heading">
                      {project.title}
                    </h4>
                    <p className="text-gray-200 text-sm mb-4 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {project.description}
                    </p>
                    {tagsList.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {tagsList.map((tag, i) => (
                          <span
                            key={i}
                            className="text-xs text-white/80 bg-black/30 backdrop-blur-sm px-2 py-1 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <Link
                      href={`${project.projectUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary font-bold hover:text-primary-dark transition-colors shrink-0"
                    >
                      View Website <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
