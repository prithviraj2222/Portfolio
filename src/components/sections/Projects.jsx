import React, { useRef } from "react";
import ProjectCard from "../projects/ProjectCard";
import { Link, useLocation } from "react-router-dom";
import MoreProjectCard from "../projects/MoreProjectCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projectsData } from "../../data/projectsData";
import { otherProjectData } from "../../data/otherProjectData";
import Button from "../common/Button";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const location = useLocation();
  const projectsSection = useRef();
  const cards = useRef();

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const cardElements = Array.from(cards.current.children);
        const totalCards = cardElements.length;

        cardElements.forEach((card, idx) => {
          gsap.set(card, {
            position: "sticky",
            top: 80,
            zIndex: idx + 1,
            transformOrigin: "top center",
          });
        });

        cardElements.forEach((card, idx) => {
          if (idx < totalCards - 1) {
            gsap.to(card, {
              scale: 0.8,
              y: 60,
              scrollTrigger: {
                trigger: cardElements[idx + 1],
                start: "top bottom",
                scrub: 1.5,
              },
            });
          }
        });
      });
    },
    { scope: projectsSection },
  );

  return (
    <div
      ref={projectsSection}
      className="min-h-screen w-full max-w-300 flex flex-col justify-center text-[#303030] dark:text-white py-20 lg:py-30 px-6 md:px-10"
    >
      <div className="flex flex-col justify-center gap-6">
        <h2
          className={`${
            location.pathname === "/projects"
              ? "text-6xl md:text-9xl"
              : "text-4xl md:text-6xl"
          } leading-none font-bold font-[mainFont] tracking-tight`}
        >
          FEATURED PROJECTS
        </h2>
        <p className="text-xl tracking-wide font-[paraFont] mb-12">
          Some things I've built along the way.
        </p>
      </div>

      <div ref={cards} className="flex flex-col gap-6">
        {projectsData.map((project) => (
          <div key={project.id} className="h-[60vh] lg:h-screen w-full">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {location.pathname === "/" ? (
        <div className="flex justify-center mt-16">
          <Button variant="outline" to="/projects">
            BROWSE ALL PROJECTS
          </Button>
        </div>
      ) : (
        <div className="pt-15">
          <div className="mt-4 flex items-center gap-4">
            <h2 className="text-4xl md:text-6xl font-bold font-[mainFont] tracking-normal whitespace-nowrap">
              MORE PROJECTS
            </h2>
            <div className="border-t w-full"></div>
          </div>
          <div className="w-full mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 md:gap-y-20">
            {otherProjectData.map((project) => (
              <MoreProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
