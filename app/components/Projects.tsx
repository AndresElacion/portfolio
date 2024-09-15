import { useState } from "react";
import { projects } from "../data/projects";
import { Button } from "../components/ui/button";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../components/ui/accordion";

export default function Projects() {
  // State to track the currently hovered project
  const [hoveredProject, setHoveredProject] = useState<any>(null);

  return (
    <div id="projects" className="relative">
      <div className="mt-12 mb-8">
        <p className="uppercase">/ Projects</p>
        <hr />
      </div>

      <div className="grid lg:grid-cols-2 gap-4 mb-24 p-5">
        {/* Left Side: Project Names */}
        <div>
          <Accordion type="single" collapsible>
            {projects.map((project, index) => {
              return (
                <div
                  key={index}
                  className="mb-8"
                  onMouseEnter={() => setHoveredProject(project)}
                >
                  <AccordionItem value={`project-${index}`}>
                    <AccordionTrigger>
                      {project.name}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p>{project.description}</p>
                      <a href={project.url} target="_blank" rel="noreferrer">
                        <Button variant="outline">Link</Button>
                      </a>
                    </AccordionContent>
                  </AccordionItem>
                </div>
              );
            })}
          </Accordion>
        </div>

        {/* Right Side: Image Reveal Based on Hovered Project */}
        <div className="relative hidden lg:block">
          <div className="sticky top-0 w-full h-96 border-2 p-5 rounded-xl shadow-xl">
            {hoveredProject ? (
              <img
                src={hoveredProject.image}
                alt={hoveredProject.slug}
                className="w-full h-full shadow-xl rounded-xl border"
              />
            ) : (
              <p className="text-center text-xl text-gray-500">
                Hover over a project name to see the image
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
